import RSS from 'rss'
import { allDocs } from 'contentlayer/generated'
import { ownerConfigs, ownerMetaData } from '@/utils/ownerConfigs'

export function GET() {
  const feed = new RSS({
    title: ownerConfigs.name,
    description: ownerMetaData.description,
    site_url: ownerMetaData.url,
    feed_url: `${ownerMetaData.url}/feed.xml`,
    copyright: 'MIT',
    language: 'en-US',
    pubDate: new Date(),
  })

  allDocs.map((post) => {
    return feed.item({
      title: post.title,
      guid: `${ownerMetaData.url}${post.slug}`,
      url: `${ownerMetaData.url}${post.slug}`,
      date: post.published_date,
      description: post.body.raw.slice(0, 300),
      author: post.author,
      categories: post.tags || [],
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  })
}
