import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Essential Block",
  description: "Read the terms and conditions governing the use of Essential Block's marketing and corporate gifting services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-20 bg-white min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Link
              href="/"
              className="text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>

          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> January 2025
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using Essential Block&apos;s website and services, you agree to be bound
                by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Services Description</h2>
              <p className="text-gray-600 mb-4">
                Essential Block provides strategic marketing services and premium corporate gifting solutions,
                including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Digital marketing campaigns and brand development</li>
                <li>Social media management and content creation</li>
                <li>SEO optimization services</li>
                <li>Branded merchandise and corporate gift curation</li>
                <li>Event giveaways and recognition programs</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">When using our services, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in any activity that disrupts our services</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content on our website, including text, graphics, logos, images, and software,
                is the property of Essential Block or its licensors and is protected by intellectual
                property laws. You may not reproduce, distribute, or create derivative works without
                our written permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Service Agreements</h2>
              <p className="text-gray-600 mb-4">
                Specific marketing and gifting projects may be subject to separate agreements that
                outline deliverables, timelines, pricing, and other terms. These agreements will
                supplement these Terms of Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Payment terms for our services will be specified in individual project agreements.
                Unless otherwise stated:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Quotes are valid for 30 days from issuance</li>
                <li>Payment is due according to the agreed schedule</li>
                <li>Late payments may incur additional fees</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, Essential Block shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from your
                use of our services. Our total liability shall not exceed the amount paid for the
                specific service giving rise to the claim.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Indemnification</h2>
              <p className="text-gray-600 mb-4">
                You agree to indemnify and hold Essential Block harmless from any claims, damages,
                losses, or expenses arising from your breach of these terms or misuse of our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Termination</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to suspend or terminate your access to our services at any time
                for violation of these terms or for any other reason at our discretion. Project-specific
                termination terms will be outlined in individual agreements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Modifications</h2>
              <p className="text-gray-600 mb-4">
                We may modify these Terms of Service at any time. Changes will be effective upon
                posting to our website. Your continued use of our services constitutes acceptance
                of any modifications.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These Terms of Service shall be governed by and construed in accordance with the
                laws of the United States, without regard to conflicts of law principles.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">12. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Service, please contact us through
                our <Link href="/#contact" className="text-primary hover:text-primary-dark">contact form</Link>.
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
