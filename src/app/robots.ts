import { ownerMetaData } from '@/utils/ownerConfigs'
import { type MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: ['/api/*'],
    },
    sitemap: `${ownerMetaData.url}/sitemap.xml`,
  }
}
