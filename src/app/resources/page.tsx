import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResourceGridWrapper from '@/components/ResourceGridWrapper';
import { getAllResources, getResourceCounts } from '@/lib/resources';

export const metadata: Metadata = {
  title: 'Resources | Essential Block - Marketing & Corporate Gifts',
  description: 'Explore our collection of marketing guides, downloadable resources, and curated external links to help elevate your brand.',
  openGraph: {
    title: 'Resources | Essential Block',
    description: 'Explore our collection of marketing guides, downloadable resources, and curated external links.',
    type: 'website',
    url: '/resources',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources | Essential Block',
    description: 'Explore our collection of marketing guides, downloadable resources, and curated external links to help elevate your brand.',
  },
  alternates: {
    canonical: '/resources',
  },
};

export default async function ResourcesPage() {
  const allResources = await getAllResources();
  const counts = await getResourceCounts();

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden section-sheen py-20 md:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 left-[-10%] h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-medium text-ink shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              Knowledge Atelier
            </span>
            <h1 className="mt-6 font-display text-4xl md:text-6xl text-ink">
              Resources for elevated brand growth
            </h1>
            <p className="mt-4 text-ink-muted text-lg leading-relaxed">
              Explore our curated collection of <span className="font-semibold text-ink">marketing guides</span>,{' '}
              <span className="font-semibold text-ink">downloadable resources</span>, and{' '}
              <span className="font-semibold text-ink">expert-recommended links</span> to shape a brand that feels intentional
              and unforgettable.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-full font-medium"
            >
              <span>Need custom strategy?</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-paper">
        <div className="container mx-auto px-4">
          <ResourceGridWrapper
            allResources={allResources}
            counts={counts}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sand">
        <div className="container mx-auto px-4">
          <div className="glass-panel rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-4xl text-ink mb-4">
              Ready to build a brand experience that feels premium?
            </h2>
            <p className="text-ink-muted mb-8 max-w-2xl mx-auto">
              Let&apos;s translate these insights into a marketing and gifting plan that moves your audience from interest
              to loyalty.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-full font-medium"
            >
              <span>Get started</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
