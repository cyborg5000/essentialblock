import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Resource types
export type ResourceType = 'guide' | 'download' | 'external';

// Resource categories
export type ResourceCategory = 'guides' | 'downloads' | 'external';

// Frontmatter interface
export interface ResourceFrontmatter {
  title: string;
  type: ResourceType;
  category: ResourceCategory;
  date: string;
  excerpt: string;
  externalUrl?: string;
  fileUrl?: string;
}

// Complete Resource interface
export interface Resource {
  slug: string;
  frontmatter: ResourceFrontmatter;
  content: string;
}

// Content directory path
const contentDirectory = path.join(process.cwd(), 'src/content/resources');

// Get all resources from all categories
export async function getAllResources(): Promise<Resource[]> {
  const categories: ResourceCategory[] = ['guides', 'downloads', 'external'];
  const allResources: Resource[] = [];

  for (const category of categories) {
    const categoryPath = path.join(contentDirectory, category);

    // Check if directory exists
    if (!fs.existsSync(categoryPath)) {
      continue;
    }

    // Read all files in the category directory
    const fileNames = fs.readdirSync(categoryPath);
    const markdownFiles = fileNames.filter(name => name.endsWith('.md'));

    for (const fileName of markdownFiles) {
      const filePath = path.join(categoryPath, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      // Validate frontmatter
      if (!data.title || !data.type || !data.category || !data.excerpt) {
        console.warn(`Invalid frontmatter in ${filePath}`);
        continue;
      }

      // Generate slug from filename (remove .md extension)
      const slug = fileName.replace(/\.md$/, '');

      allResources.push({
        slug,
        frontmatter: data as ResourceFrontmatter,
        content,
      });
    }
  }

  // Sort by date (newest first)
  return allResources.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });
}

// Get a single resource by slug
export async function getResourceBySlug(slug: string): Promise<Resource | null> {
  const resources = await getAllResources();
  return resources.find(resource => resource.slug === slug) || null;
}

// Get resources by category
export async function getResourcesByCategory(category: ResourceCategory): Promise<Resource[]> {
  const resources = await getAllResources();
  return resources.filter(resource => resource.frontmatter.category === category);
}

// Get resources by type
export async function getResourcesByType(type: ResourceType): Promise<Resource[]> {
  const resources = await getAllResources();
  return resources.filter(resource => resource.frontmatter.type === type);
}

// Get count of resources per category
export async function getResourceCounts(): Promise<Record<string, number>> {
  const resources = await getAllResources();
  const counts: Record<string, number> = {
    all: resources.length,
    guides: 0,
    downloads: 0,
    external: 0,
  };

  for (const resource of resources) {
    const category = resource.frontmatter.category;
    if (category in counts) {
      counts[category]++;
    }
  }

  return counts;
}

// Get all resource slugs for static generation
export async function getAllResourceSlugs(): Promise<string[]> {
  const resources = await getAllResources();
  return resources.map(resource => resource.slug);
}
