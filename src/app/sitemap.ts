import { getAllCategories, getAllTags } from '@/utils/functions'
import { getPostsData } from '@/utils/functions/getPostsData'
import { ownerMetaData } from '@/utils/ownerConfigs'

export default async function Sitemap() {
  const articles = await getPostsData()

  const posts = articles.map(post => ({
    url: `${ownerMetaData.url}/${post.category}/${post.slug}`,
    lastModified: post.updated_at,
  }))

  const tags = getAllTags(articles).map(tag => ({
    url: `${ownerMetaData.url}/tag/${tag}`,
    lastModified: new Date(),
  }))

  const categories = getAllCategories(articles).map(category => ({
    url: `${ownerMetaData.url}/${category}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: ownerMetaData.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...categories,
    ...tags,
    ...posts,
  ]
}
