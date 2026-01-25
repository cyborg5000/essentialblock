import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Essential Block - Strategic Marketing & Premium Corporate Gifts',
    short_name: 'Essential Block',
    description: 'Transform your brand with data-driven marketing strategies and thoughtfully curated corporate gifts. 10+ years experience, 500+ projects completed.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#9370DB',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    categories: ['business', 'marketing', 'shopping'],
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
