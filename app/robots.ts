import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: process.env.WEBSITE_URL,
    sitemap: `${process.env.WEBSITE_URL}/sitemap.xml`,
  }
}