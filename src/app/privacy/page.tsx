import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Essential Block",
  description: "Learn how Essential Block collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> January 2025
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Essential Block (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Information We Collect</h2>
              <h3 className="text-xl font-medium mb-3 text-gray-800">Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you voluntarily provide when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Fill out our contact form</li>
                <li>Request a quote or consultation</li>
                <li>Subscribe to our newsletter</li>
                <li>Engage with our marketing services</li>
              </ul>
              <p className="text-gray-600 mb-4">
                This information may include your name, email address, phone number, company name,
                and any other details you choose to provide.
              </p>

              <h3 className="text-xl font-medium mb-3 text-gray-800">Automatically Collected Information</h3>
              <p className="text-gray-600 mb-4">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>IP address and browser type</li>
                <li>Device information</li>
                <li>Pages visited and time spent</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver our marketing and corporate gifting services</li>
                <li>Send you relevant updates and promotional materials (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties.
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Professional advisors (lawyers, accountants)</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Cookies</h2>
              <p className="text-gray-600 mb-4">
                Our website may use cookies and similar tracking technologies to enhance your
                browsing experience. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Changes to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the
                &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us through
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
