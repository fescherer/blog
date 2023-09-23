import { notFound } from 'next/navigation'
import { allDocs } from 'contentlayer/generated'
import { Post } from '@/features/Post'

interface PageProps {
  params: {
    type: string
    slug: string
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