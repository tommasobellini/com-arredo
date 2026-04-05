import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/maintenance', '/api/'],
      },
    ],
    sitemap: 'https://comarredo.com/sitemap.xml',
    host: 'https://comarredo.com',
  }
}
