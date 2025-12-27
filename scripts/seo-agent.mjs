#!/usr/bin/env node
import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";

const root = process.cwd();

const LEVELS = [
  { key: "critical", label: "Critical" },
  { key: "high", label: "High" },
  { key: "medium", label: "Medium" },
  { key: "low", label: "Low" },
  { key: "info", label: "Info" },
];

const defaultReportPath = path.join(root, "SEO_AGENT_REPORT.md");

const args = new Set(process.argv.slice(2));
const reportPathArgIndex = process.argv.indexOf("--report");
const reportPath = reportPathArgIndex !== -1 ? path.resolve(process.argv[reportPathArgIndex + 1]) : defaultReportPath;
const watchMode = args.has("--watch");
const intervalIndex = process.argv.indexOf("--interval");
const intervalSeconds = intervalIndex !== -1 ? Number(process.argv[intervalIndex + 1]) : 0;
const helpMode = args.has("--help") || args.has("-h");

if (helpMode) {
  console.log(`SEO background agent usage:
  node scripts/seo-agent.mjs [--watch] [--interval 60] [--report path]

Options:
  --watch        Re-run when files change.
  --interval     Re-run every N seconds.
  --report       Output report path (default: SEO_AGENT_REPORT.md)
`);
  process.exit(0);
}

const paths = {
  layout: path.join(root, "src", "app", "layout.tsx"),
  footer: path.join(root, "src", "components", "Footer.tsx"),
  robots: path.join(root, "public", "robots.txt"),
  sitemap: path.join(root, "src", "app", "sitemap.ts"),
  publicDir: path.join(root, "public"),
  srcDir: path.join(root, "src"),
};

const iconCandidates = [
  path.join(root, "public", "favicon.ico"),
  path.join(root, "public", "favicon-32x32.png"),
  path.join(root, "public", "favicon-16x16.png"),
  path.join(root, "public", "apple-touch-icon.png"),
  path.join(root, "public", "site.webmanifest"),
  path.join(root, "src", "app", "icon.png"),
  path.join(root, "src", "app", "icon.tsx"),
  path.join(root, "src", "app", "favicon.ico"),
];

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function readFileSafe(filePath) {
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch {
    return "";
  }
}

function addFinding(findings, level, title, detail, filePath) {
  const item = {
    title,
    detail,
    filePath: filePath ? path.relative(root, filePath) : null,
  };
  findings[level].push(item);
}

function extractObjectBlock(text, marker) {
  const markerIndex = text.indexOf(marker);
  if (markerIndex === -1) return null;
  const braceStart = text.indexOf("{", markerIndex);
  if (braceStart === -1) return null;

  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let escape = false;

  for (let i = braceStart; i < text.length; i += 1) {
    const char = text[i];

    if (escape) {
      escape = false;
      continue;
    }

    if (char === "\\") {
      escape = true;
      continue;
    }

    if (inSingle) {
      if (char === "'") inSingle = false;
      continue;
    }

    if (inDouble) {
      if (char === "\"") inDouble = false;
      continue;
    }

    if (inTemplate) {
      if (char === "`") inTemplate = false;
      continue;
    }

    if (char === "'") {
      inSingle = true;
      continue;
    }

    if (char === "\"") {
      inDouble = true;
      continue;
    }

    if (char === "`") {
      inTemplate = true;
      continue;
    }

    if (char === "{") depth += 1;
    if (char === "}") depth -= 1;

    if (depth === 0) {
      return text.slice(braceStart, i + 1);
    }
  }

  return null;
}

function hasKey(block, key) {
  if (!block) return false;
  const pattern = new RegExp(`(^|[,{]\\s*)${key}\\s*:`, "m");
  return pattern.test(block);
}

function getFirstStringValue(block, key) {
  if (!block) return null;
  const pattern = new RegExp(`${key}\\s*:\\s*[\"'\\\`]([\\s\\S]*?)[\"'\\\`]`, "m");
  const match = block.match(pattern);
  return match ? match[1].trim() : null;
}

async function listFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await listFiles(fullPath);
      files.push(...nested);
      continue;
    }
    files.push(fullPath);
  }

  return files;
}

function collectImageTags(text) {
  const tags = [];
  const regex = /<(img|Image)\b[\s\S]*?>/g;
  let match = regex.exec(text);
  while (match) {
    tags.push(match[0]);
    match = regex.exec(text);
  }
  return tags;
}

async function runAudit() {
  const findings = {
    critical: [],
    high: [],
    medium: [],
    low: [],
    info: [],
  };

  const layoutExists = await fileExists(paths.layout);
  if (!layoutExists) {
    addFinding(findings, "critical", "Missing Next.js layout metadata file", "Expected src/app/layout.tsx to define metadata.");
  }

  const layoutText = layoutExists ? await readFileSafe(paths.layout) : "";

  if (layoutText) {
    if (!layoutText.includes("export const metadata")) {
      addFinding(findings, "critical", "Missing metadata export", "Add export const metadata for SEO metadata.", paths.layout);
    } else {
      const metadataBlock = extractObjectBlock(layoutText, "export const metadata");
      const titleValue = getFirstStringValue(metadataBlock, "title");
      const descriptionValue = getFirstStringValue(metadataBlock, "description");

      if (!titleValue) {
        addFinding(findings, "high", "Missing title in metadata", "Add a descriptive title tag.", paths.layout);
      } else if (titleValue.length < 30 || titleValue.length > 70) {
        addFinding(
          findings,
          "medium",
          "Title length outside recommended range",
          `Title length is ${titleValue.length} characters. Aim for 30-70 characters.`,
          paths.layout
        );
      }

      if (!descriptionValue) {
        addFinding(findings, "high", "Missing description in metadata", "Add a meta description.", paths.layout);
      } else if (descriptionValue.length < 120 || descriptionValue.length > 165) {
        addFinding(
          findings,
          "medium",
          "Description length outside recommended range",
          `Description length is ${descriptionValue.length} characters. Aim for 120-165 characters.`,
          paths.layout
        );
      }

      if (!hasKey(metadataBlock, "openGraph")) {
        addFinding(findings, "medium", "Missing Open Graph metadata", "Add openGraph metadata for social sharing.", paths.layout);
      }

      if (!hasKey(metadataBlock, "twitter")) {
        addFinding(findings, "medium", "Missing Twitter card metadata", "Add twitter metadata for social sharing.", paths.layout);
      }

      if (!hasKey(metadataBlock, "metadataBase")) {
        addFinding(findings, "medium", "Missing metadataBase", "Add metadataBase for absolute URLs in metadata.", paths.layout);
      }

      if (!hasKey(metadataBlock, "alternates") || !layoutText.includes("canonical")) {
        addFinding(findings, "medium", "Missing canonical URL", "Add alternates.canonical to avoid duplicate content.", paths.layout);
      }

      if (!layoutText.includes("<html") || !layoutText.includes("lang=\"")) {
        addFinding(findings, "medium", "Missing lang attribute", "Add lang attribute to the root html tag.", paths.layout);
      }

      const assetMatches = [...layoutText.matchAll(/["'](\/[^"'?]+\.(?:png|jpe?g|svg|webp))["']/gi)];
      for (const match of assetMatches) {
        const assetPath = path.join(paths.publicDir, match[1].replace(/^\\//, ""));
        const assetExists = await fileExists(assetPath);
        if (!assetExists) {
          addFinding(
            findings,
            "high",
            "Referenced social image missing",
            `Missing asset ${match[1]} referenced in metadata.`,
            paths.layout
          );
        }
      }
    }
  }

  const robotsExists = await fileExists(paths.robots);
  if (!robotsExists) {
    addFinding(findings, "high", "Missing robots.txt", "Add public/robots.txt to guide crawlers.", paths.robots);
  } else {
    const robotsText = await readFileSafe(paths.robots);
    if (!robotsText.includes("Sitemap:")) {
      addFinding(findings, "medium", "robots.txt missing Sitemap entry", "Add Sitemap: https://example.com/sitemap.xml.", paths.robots);
    }
    if (!robotsText.toLowerCase().includes("user-agent")) {
      addFinding(findings, "medium", "robots.txt missing User-agent", "Add a User-agent directive.", paths.robots);
    }
  }

  const sitemapExists = await fileExists(paths.sitemap);
  if (!sitemapExists) {
    addFinding(findings, "high", "Missing sitemap.ts", "Add src/app/sitemap.ts for XML sitemap generation.", paths.sitemap);
  }

  const existingIcons = [];
  for (const candidate of iconCandidates) {
    if (await fileExists(candidate)) existingIcons.push(candidate);
  }

  if (existingIcons.length === 0) {
    addFinding(
      findings,
      "medium",
      "Missing favicon/app icons",
      "Add favicon.ico and app icons (16x16, 32x32, apple-touch-icon)."
    );
  } else {
    const hasAppleTouch = existingIcons.some((item) => item.endsWith("apple-touch-icon.png"));
    const hasManifest = existingIcons.some((item) => item.endsWith("site.webmanifest"));

    if (!hasAppleTouch) {
      addFinding(
        findings,
        "low",
        "Missing apple-touch-icon",
        "Add apple-touch-icon.png for iOS bookmarks.",
        path.join(root, "public")
      );
    }

    if (!hasManifest) {
      addFinding(
        findings,
        "low",
        "Missing site.webmanifest",
        "Add a web app manifest for richer install metadata.",
        path.join(root, "public")
      );
    }
  }

  const footerText = await readFileSafe(paths.footer);
  if (footerText) {
    const privacyLinked = footerText.includes("href=\"/privacy\"") || footerText.includes("href='/privacy'");
    const termsLinked = footerText.includes("href=\"/terms\"") || footerText.includes("href='/terms'");

    if (privacyLinked) {
      const privacyPage = path.join(root, "src", "app", "privacy", "page.tsx");
      if (!(await fileExists(privacyPage))) {
        addFinding(findings, "high", "Broken privacy policy link", "Create /privacy page or remove the link.", paths.footer);
      }
    }

    if (termsLinked) {
      const termsPage = path.join(root, "src", "app", "terms", "page.tsx");
      if (!(await fileExists(termsPage))) {
        addFinding(findings, "high", "Broken terms link", "Create /terms page or remove the link.", paths.footer);
      }
    }
  }

  if (await fileExists(paths.srcDir)) {
    const sourceFiles = (await listFiles(paths.srcDir)).filter((file) => file.endsWith(".tsx") || file.endsWith(".mdx"));
    const pageFiles = sourceFiles.filter((file) => file.endsWith(`${path.sep}page.tsx`) || file.endsWith(`${path.sep}page.mdx`));

    for (const pageFile of pageFiles) {
      const text = await readFileSafe(pageFile);
      const h1Count = (text.match(/<h1\b/gi) || []).length;
      if (h1Count === 0) {
        addFinding(findings, "low", "Missing h1 on page", "Ensure each page has one h1 for primary topic.", pageFile);
      } else if (h1Count > 1) {
        addFinding(findings, "low", "Multiple h1 tags on page", "Limit each page to a single h1.", pageFile);
      }
    }

    for (const file of sourceFiles) {
      const text = await readFileSafe(file);
      const imageTags = collectImageTags(text);
      for (const tag of imageTags) {
        if (!/\balt\s*=\s*/i.test(tag)) {
          addFinding(findings, "low", "Image missing alt text", "Add alt text for accessibility and SEO.", file);
          break;
        }
      }
    }
  }

  return findings;
}

function formatReport(findings) {
  const timestamp = new Date().toISOString();
  const counts = LEVELS.reduce((acc, level) => {
    acc[level.key] = findings[level.key].length;
    return acc;
  }, {});

  let output = "# SEO Background Agent Report\n";
  output += `Updated: ${timestamp}\n\n`;
  output += "## Summary\n";
  for (const level of LEVELS) {
    output += `- ${level.label}: ${counts[level.key]}\n`;
  }

  output += "\n## Findings\n";
  for (const level of LEVELS) {
    output += `\n### ${level.label}\n`;
    if (findings[level.key].length === 0) {
      output += "- None\n";
      continue;
    }

    for (const item of findings[level.key]) {
      const location = item.filePath ? ` (${item.filePath})` : "";
      output += `- ${item.title}. ${item.detail}${location}\n`;
    }
  }

  return output;
}

async function runAndReport() {
  const findings = await runAudit();
  const report = formatReport(findings);
  await fs.writeFile(reportPath, report, "utf-8");
  const total = LEVELS.reduce((sum, level) => sum + findings[level.key].length, 0);
  console.log(`SEO agent: ${total} findings written to ${path.relative(root, reportPath)}`);
}

function startWatch() {
  let timer = null;
  const scheduleRun = () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      runAndReport().catch((err) => {
        console.error("SEO agent failed:", err.message);
      });
    }, 150);
  };

  const watchTargets = [paths.srcDir, paths.publicDir, paths.layout, paths.footer, paths.sitemap, paths.robots];
  const watchers = [];

  for (const target of watchTargets) {
    if (!fsSync.existsSync(target)) continue;
    try {
      watchers.push(fsSync.watch(target, { recursive: true }, scheduleRun));
    } catch {
      watchers.push(fsSync.watch(target, scheduleRun));
    }
  }

  process.on("SIGINT", () => {
    for (const watcher of watchers) watcher.close();
    process.exit(0);
  });
}

(async () => {
  await runAndReport();

  if (watchMode) {
    startWatch();
    return;
  }

  if (intervalSeconds > 0) {
    setInterval(() => {
      runAndReport().catch((err) => {
        console.error("SEO agent failed:", err.message);
      });
    }, intervalSeconds * 1000);
  }
})();
