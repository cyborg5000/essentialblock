import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Essential Block | Marketing Agency & Corporate Gifts",
  description: "Essential Block is your partner for innovative marketing solutions and impactful corporate gifts that elevate your brand.",
  keywords: "marketing agency, digital marketing, corporate gifts, brand activation, promotional items",
  openGraph: {
    title: "Essential Block | Marketing Agency & Corporate Gifts",
    description: "Your partner for innovative marketing solutions and impactful corporate gifts.",
    url: "https://essentialblock.com",
    siteName: "Essential Block",
    locale: "en_US",
    type: "website",
  },
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
