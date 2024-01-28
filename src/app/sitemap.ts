// import { getAllCategories, getAllTags } from '@/utils/functions'
import { ownerMetaData } from '@/utils/ownerConfigs'

// import { allDocs } from 'contentlayer/generated'

export default function Sitemap() {
  // const posts = allDocs.map(post => ({
  //   url: `${ownerMetaData.url}${post.slug}`,
  //   lastModified: post.updated_at,
  // }))

  // const tags = getAllTags().map(tag => ({
  //   url: `${ownerMetaData.url}/${tag}`,
  //   lastModified: new Date(),
  // }))

  // const categories = getAllCategories().map(category => ({
  //   url: `${ownerMetaData.url}/${category}`,
  //   lastModified: new Date(),
  // }))

  return [
    {
      url: ownerMetaData.url,
      lastModified: new Date(),
    },
    // ...categories,
    // ...tags,
    // ...posts,
  ]
}
