import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Essential Block | Strategic Marketing & Premium Corporate Gifts",
  description: "Transform your brand with data-driven marketing strategies and thoughtfully curated corporate gifts. 10+ years experience, 500+ projects completed, 98% client satisfaction.",
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
    title: "Essential Block | Strategic Marketing & Premium Corporate Gifts",
    description: "Data-driven marketing strategies and premium corporate gifting solutions. 500+ successful brands trust us for exceptional results.",
    url: "https://essentialblock.com",
    siteName: "Essential Block",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Essential Block - Marketing & Corporate Gifts",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Essential Block | Strategic Marketing & Premium Corporate Gifts",
    description: "Transform your brand with powerful marketing and memorable corporate gifts.",
    images: ["/twitter-image.svg"],
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
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
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

  return (
    <html lang="en" className="light">
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
