import fs from 'node:fs'
import { Feed } from 'feed'
import { allDocs } from 'contentlayer/generated'
import { ownerConfigs, ownerMetaData } from '@/utils/ownerConfigs'

export function generateRss() {
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

  allDocs.map((post) => {
    return feed.addItem({
      title: post.title,
      id: `${ownerMetaData.url}${post.slug}`,
      guid: `${ownerMetaData.url}${post.slug}`,
      link: `${ownerMetaData.url}${post.slug}`,
      date: new Date(post.published_date),
      description: post.body.raw.slice(0, 300),
      author: [{ name: post.author, link: ownerConfigs.githubLink, email: ownerConfigs.githubLink }],
      content: post.body.raw,
      image: post.image,
    })
  })

  // return {
  //   rss: feed.rss2(),
  //   atom: feed.atom1(),
  //   json: feed.json1(),
  // }

  fs.writeFileSync('./public/feed.xml', feed.rss2())
  fs.writeFileSync('./public/atom.xml', feed.atom1())
  fs.writeFileSync('./public/feed.json', feed.json1())
}
