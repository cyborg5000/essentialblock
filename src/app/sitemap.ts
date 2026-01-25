import { MetadataRoute } from 'next';
import { getAllResourceSlugs } from '@/lib/resources';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://essentialblock.com';
  const currentDate = new Date();

  // Get all resource slugs for dynamic URLs
  const resourceSlugs = await getAllResourceSlugs();

  // Base URLs
  const baseUrls = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Dynamic resource URLs
  const resourceUrls = resourceSlugs.map((slug) => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...baseUrls, ...resourceUrls];
}
