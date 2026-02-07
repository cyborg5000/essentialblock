import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const monoFont = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Essential Block | Marketing Agency & Corporate Gifting Company",
  description: "Full-service marketing agency and corporate gifting company. 500+ projects, 98% client satisfaction, 3x average ROI. Strategy, storytelling, and premium gifts.",
  keywords: "marketing agency, digital marketing, corporate gifts, brand development, social media management, SEO optimization, branded merchandise, luxury gift collections, event giveaways",
  authors: [{ name: "Essential Block" }],
  creator: "Essential Block",
  publisher: "Essential Block",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Essential Block | Marketing Agency & Corporate Gifting Company",
    description: "Full-service marketing agency and corporate gifting company. 500+ projects, 98% client satisfaction, 3x average ROI. Strategy, storytelling, and premium gifts.",
    url: "https://essentialblock.com",
    siteName: "Essential Block",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Essential Block | Marketing Agency & Corporate Gifting Company",
    description: "Full-service marketing agency and corporate gifting company. 500+ projects, 98% client satisfaction, 3x average ROI. Strategy, storytelling, and premium gifts.",
  },
  metadataBase: new URL("https://essentialblock.com"),
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data - Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Essential Block",
    "url": "https://essentialblock.com",
    "logo": "https://essentialblock.com/EBlogo.webp",
    "description": "Strategic Marketing & Premium Corporate Gifts - Transform your brand with data-driven marketing strategies and thoughtfully curated corporate gifts.",
    "foundingDate": "2013",
    "slogan": "Where Strategic Marketing Meets Memorable Gifting",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+65-9187-2356",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "SG"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "2",
      "bestRating": "5"
    }
  };

  // Service Schema - Marketing Services
  const marketingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "Essential Block"
    },
    "description": "Data-driven marketing strategies including digital marketing campaigns, brand development, social media management, content creation, and SEO optimization.",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing Campaigns"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Management"
          }
        }
      ]
    }
  };

  // Service Schema - Corporate Gifts
  const giftsServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Corporate Gift Services",
    "provider": {
      "@type": "Organization",
      "name": "Essential Block"
    },
    "description": "Premium corporate gifts including branded merchandise, luxury gift collections, event giveaways, and personalized recognition gifts.",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };

  // FAQ Schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What marketing services does Essential Block offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential Block offers comprehensive marketing services including targeted digital marketing campaigns, strategic brand development, expert social media management, engaging content creation, and advanced SEO optimization to help your brand reach its target audience effectively."
        }
      },
      {
        "@type": "Question",
        "name": "What types of corporate gifts are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a wide range of premium corporate gifts including bespoke branded merchandise, luxury gift collections for VIP clients, memorable event giveaways, personalized recognition gifts for employees, and curated appreciation sets that strengthen business relationships."
        }
      },
      {
        "@type": "Question",
        "name": "How does Essential Block integrate marketing with corporate gifting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential Block takes a holistic approach by seamlessly integrating marketing strategies with corporate gifting solutions. This creates powerful brand experiences that combine strategic messaging with tangible touchpoints, resulting in stronger client relationships and measurable ROI."
        }
      },
      {
        "@type": "Question",
        "name": "What is Essential Block's experience in the industry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential Block has over 10 years of industry experience, having completed 500+ successful projects with a 98% client satisfaction rate. We've helped brands across various industries achieve an average 3x ROI on their marketing and gifting investments."
        }
      }
    ]
  };

  // Review and BreadcrumbList schemas removed:
  // - Reviews had fake reviewer names ("Marketing Director", "CEO, Tech Startup")
  // - Breadcrumbs pointed to hash fragment URLs (/#marketing, /#corporate-gifts) which are not real pages
  // TODO: Re-add Review schema with real client testimonials when available
  // TODO: Re-add BreadcrumbList schema when dedicated service pages exist

  return (
    <html lang="en" className={`light ${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(marketingServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(giftsServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
