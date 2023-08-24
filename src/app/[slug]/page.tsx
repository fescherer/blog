import { notFound } from 'next/navigation'
import { allDocs } from 'contentlayer/generated'
import { Post } from '@/features/Post'
import { Mdx } from '@/components/Lib/MdxComponents'

interface PageProps {
  params: {
    slug: string
  }
}

function getDocFromParams(slug: string) {
  const doc = allDocs.find(doc => doc.slugAsParams === slug)

  if (!doc)
    notFound()

  return doc
}

export default function PostPage({ params: { slug } }: PageProps) {
  const doc = getDocFromParams(slug)

  return (
    <div className='flex flex-col'>
      <Mdx code={doc.body.code} />
      <Post />
    </div>
  )
}
