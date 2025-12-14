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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Essential Block - Marketing & Corporate Gifts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Essential Block | Strategic Marketing & Premium Corporate Gifts",
    description: "Transform your brand with powerful marketing and memorable corporate gifts.",
    images: ["/twitter-image.jpg"],
  },
  metadataBase: new URL("https://essentialblock.com"),
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
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
