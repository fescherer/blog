import type { WebSite, WithContext } from 'schema-dts'
import { felipeschererData } from './publisher'
import { ownerMetaData } from '@/utils/ownerConfigs'

export const websiteJSONLD: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': ownerMetaData.title,
  'description': ownerMetaData.description,
  'image': {
    '@type': 'ImageObject',
    'url': ownerMetaData.image.url,
    'width': `${ownerMetaData.image.width}px`,
    'height': `${ownerMetaData.image.height}px`,
  },
  'url': ownerMetaData.url,
  'publisher': felipeschererData,
  'mainEntityOfPage': {
    '@type': 'WebPage',
    '@id': 'https://blog.felipescherer.com',
  },
}
