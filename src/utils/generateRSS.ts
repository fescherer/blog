import { Feed } from 'feed'
import { ownerConfigs, ownerMetaData } from '@/utils/ownerConfigs'
import { getPostsData } from './functions/getPostsData'

export async function generateRss() {
  const feed = new Feed({
    title: ownerConfigs.name,
    description: ownerMetaData.description,
    id: ownerMetaData.url,
    link: ownerMetaData.url,
    language: 'en',
    image: `${ownerMetaData.url}${ownerMetaData.image.url}`,
    favicon: `${ownerMetaData.url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${ownerConfigs.name}`,
    updated: new Date(),
    feedLinks: {
      json: `${ownerMetaData.url}/feed.json`,
      atom: `${ownerMetaData.url}/feed.atom`,
      rss: `${ownerMetaData.url}/feed.xml`,
    },
    author: {
      name: ownerConfigs.name,
      email: ownerConfigs.githubLink,
      link: ownerConfigs.githubLink,
    },
  })

  const articles = await getPostsData()
  articles.map((post) => {
    return feed.addItem({
      title: post.title,
      id: `${ownerMetaData.url}/${post.category}/${post.slug}`,
      guid: `${ownerMetaData.url}/${post.category}/${post.slug}`,
      link: `${ownerMetaData.url}/${post.category}/${post.slug}`,
      date: new Date(post.published_date),
      description: post.content.slice(0, 300),
      author: [{ name: post.author, link: ownerConfigs.githubLink, email: ownerConfigs.githubLink }],
      content: 'post.content',
      image: post.image,
    })
  })

  feed.addCategory('Technology')

  feed.addContributor({ name: ownerConfigs.name, link: ownerConfigs.githubLink, email: ownerConfigs.githubLink })

  return {
    rss: feed.rss2(),
    atom: feed.atom1(),
    json: feed.json1(),
  }
}
