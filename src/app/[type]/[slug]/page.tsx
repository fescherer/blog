import { notFound } from 'next/navigation'
import { allDocs } from 'contentlayer/generated'
import { Post } from '@/features/Post'

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
      description: data.description,
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

export default function PostPage({ params: { type, slug } }: PageProps) {
  const doc = getDocFromParams(type, slug)
  return (
    <div className='flex w-full max-w-full flex-col'>
      <Post doc={doc} />
    </div>
  )
}
