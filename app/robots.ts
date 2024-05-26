import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: "https://www.unterrainconfus.fr",
    sitemap: "https://www.unterrainconfus.fr/sitemap.xml",
  }
}