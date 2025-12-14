import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://essentialblock.com';
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Note: Hash fragments (#services, #marketing, etc.) are removed as search engines
    // typically ignore them in sitemaps. These are single-page anchors.
    // When separate pages are created for services, add them here.
  ];
}
