import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getResourceBySlug, getAllResources, getAllResourceSlugs } from '@/lib/resources';
import ReactMarkdown from 'react-markdown';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all resources
export async function generateStaticParams() {
  const slugs = await getAllResourceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each resource
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = await getResourceBySlug(slug);

  if (!resource) {
    return {
      title: 'Resource Not Found | Essential Block',
    };
  }

  return {
    title: `${resource.frontmatter.title} | Essential Block Resources`,
    description: resource.frontmatter.excerpt,
    openGraph: {
      title: resource.frontmatter.title,
      description: resource.frontmatter.excerpt,
      type: 'article',
      publishedTime: resource.frontmatter.date,
      url: `/resources/${slug}`,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: resource.frontmatter.title,
      description: resource.frontmatter.excerpt,
    },
    alternates: {
      canonical: `/resources/${slug}`,
    },
  };
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = await getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const { frontmatter, content } = resource;

  // Get related resources (up to 2, excluding current and external resources)
  const allResources = await getAllResources();
  const relatedResources = allResources
    .filter((r) => r.slug !== slug && r.frontmatter.type !== 'external')
    .slice(0, 2);

  // Handle external links - redirect immediately
  if (frontmatter.type === 'external' && frontmatter.externalUrl) {
    redirect(frontmatter.externalUrl);
  }

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Header />

      <article className="min-h-screen">
        {/* Header */}
        <header className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-sm">
                  <li>
                    <Link href="/" className="text-gray-500 hover:text-primary transition-colors">
                      Home
                    </Link>
                  </li>
                  <li className="text-gray-400" aria-hidden="true">/</li>
                  <li>
                    <Link href="/resources" className="text-gray-500 hover:text-primary transition-colors">
                      Resources
                    </Link>
                  </li>
                  <li className="text-gray-400" aria-hidden="true">/</li>
                  <li className="text-gray-900 font-medium">{frontmatter.title}</li>
                </ol>
              </nav>

              {/* Type Badge */}
              <div className="mb-4">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
                    frontmatter.type === 'guide'
                      ? 'text-primary bg-primary/10'
                      : 'text-secondary bg-secondary/10'
                  }`}
                >
                  {frontmatter.type === 'guide' ? '📖 Guide' : '📥 Download'}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                {frontmatter.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <time dateTime={frontmatter.date} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(frontmatter.date)}
                </time>
                <span className="text-gray-400">|</span>
                <span className="capitalize">{frontmatter.category}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Download Action (for download type) */}
        {frontmatter.type === 'download' && frontmatter.fileUrl && (
          <div className="bg-secondary/5 border-b border-secondary/20 py-6">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <a
                  href={frontmatter.fileUrl}
                  download
                  className="inline-flex items-center gap-3 px-6 py-3 bg-secondary text-white rounded-full font-medium hover:bg-secondary/90 transition-colors shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Resource
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => <h1 className="text-3xl font-bold mb-4 mt-8">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl font-bold mb-3 mt-8">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-bold mb-3 mt-6">{children}</h3>,
                    p: ({ children }) => <p className="mb-4 leading-relaxed text-gray-700">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>,
                    li: ({ children }) => <li className="ml-4">{children}</li>,
                    a: ({ children, href }) => (
                      <a href={href} className="text-primary hover:text-primary-dark underline" target="_blank" rel="noopener noreferrer">
                        {children}
                      </a>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 my-4">
                        {children}
                      </blockquote>
                    ),
                    code: ({ children }) => (
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                        {children}
                      </pre>
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-8 md:p-10 text-center shadow-sm">
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-3">
                Need help implementing this strategy?
              </h2>
              <p className="text-ink-muted mb-6 max-w-xl mx-auto">
                Our team can build a custom plan tailored to your brand.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-full font-medium"
              >
                <span>Book a Free Strategy Call</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      {relatedResources.length > 0 && (
        <section className="py-12 md:py-16 bg-paper">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-8 text-center">
                Related Resources
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedResources.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/resources/${related.slug}`}
                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                        related.frontmatter.type === 'guide'
                          ? 'text-primary bg-primary/10'
                          : 'text-secondary bg-secondary/10'
                      }`}
                    >
                      {related.frontmatter.type === 'guide' ? 'Guide' : 'Download'}
                    </span>
                    <h3 className="text-lg font-semibold text-ink group-hover:text-primary transition-colors mb-2">
                      {related.frontmatter.title}
                    </h3>
                    <p className="text-sm text-ink-muted line-clamp-2">
                      {related.frontmatter.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Resources */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors group"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Resources
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
