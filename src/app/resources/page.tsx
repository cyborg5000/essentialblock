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
  },
};

export default async function ResourcesPage() {
  const allResources = await getAllResources();
  const counts = await getResourceCounts();

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 md:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,112,219,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(244,162,97,0.05),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
              📚 Knowledge Hub
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Resources for <span className="text-primary">Brand Growth</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Explore our curated collection of <span className="font-semibold">marketing guides</span>,{' '}
              <span className="font-semibold">downloadable resources</span>, and{' '}
              <span className="font-semibold">expert-recommended links</span> to help you elevate your brand strategy.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-full font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Need Custom Solutions?</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ResourceGridWrapper
            allResources={allResources}
            counts={counts}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-primary">Transform</span> Your Brand?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s turn these insights into action. Our team is ready to help you implement strategies that drive real results.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-full font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Get Started Today</span>
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
