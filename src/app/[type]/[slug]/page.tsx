import { notFound } from 'next/navigation'
import type { Article } from 'schema-dts'
import type { Doc } from 'contentlayer/generated'
import { allDocs } from 'contentlayer/generated'
import { Post } from '@/features/Post'
import { JSONLD } from '@/components/JSONLD'
import { getArticleJSONLD } from '@/components/JSONLD/data/article'
import { ownerMetaData } from '@/utils/ownerConfigs'

interface PageProps {
  params: {
    type: string
    slug: string
  }
}

export function generateMetadata(
  { params: { slug, type } }: PageProps,
) {
  const data = getDocFromParams(type, slug)

  return {
    title: data.title,
    alternates: {
      canonical: `https://blog.felipescherer.com/${type}/${slug}`,
    },

    openGraph: {
      title: `${data.title} | Felipe Scherer\'s Blog`,
      description: data.body.raw.slice(0, 90),
      url: `https://blog.felipescherer.com/${type}/${slug}`,
      siteName: 'Felipe Scherer\'s blog',
      images: [
        {
          url: data.image,
          alt: data.alt,
          width: 1300,
          height: 630,
        },
      ],
      locale: 'en',
      type: 'article',
    },

    authors: [
      { name: 'Felipe Scherer', url: 'https://github.com/fescherer.com' },
    ],
  }
}

function getDocFromParams(type: string, slug: string) {
  const doc = allDocs.find(doc => doc.slug === `/${type}/${slug}`)

  if (!doc)
    notFound()

  return doc
}

function getJSONLD(doc: Doc, type: string, slug: string) {
  return getArticleJSONLD({
    '@type': 'Article',
    'headline': doc.title,
    'url': `https://blog.felipescherer.com/${type}/${slug}`,
    'datePublished': doc.published_date,
    'dateModified': doc.published_date,
    'image': {
      '@type': 'ImageObject',
      'url': doc.image,
      'width': `${ownerMetaData.image.width}px`,
      'height': `${ownerMetaData.image.height}px`,
    },
    'keywords': doc.tags,
    'description': doc.body.raw.slice(0, 90),
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://blog.felipescherer.com',
    },
  })
}

export default function PostPage({ params: { type, slug } }: PageProps) {
  const doc = getDocFromParams(type, slug)
  return (
    <div className='flex w-full max-w-full flex-col'>
      {JSONLD<Article>(getJSONLD(doc, type, slug))}
      <Post doc={doc} />
    </div>
  )
}
