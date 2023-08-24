import { notFound } from 'next/navigation'
import { allDocs } from 'contentlayer/generated'
import { Post } from '@/features/Post'
import { Mdx } from '@/components/Lib/MdxComponents'

interface PageProps {
  params: {
    slug: string
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
async function getDocFromParams(slug: string) {
  const doc = allDocs.find(doc => doc.slugAsParams === slug)

  if (!doc)
    notFound()

  return doc
}

export default async function PostPage({ params: { slug } }: PageProps) {
  const doc = await getDocFromParams(slug)

  return (
    <div className='flex flex-col'>
      <Mdx code={doc.body.code} />
      <Post />
    </div>
  )
}
