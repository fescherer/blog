import { notFound } from 'next/navigation'
import { allDocs } from 'contentlayer/generated'
import { Post } from '@/features/Post'
import { Mdx } from '@/components/Lib/MdxComponents'

interface PageProps {
  params: {
    language: string
    type: string
    slug: string
  }
}

function getDocFromParams(language: string, type: string, slug: string) {
  const doc = allDocs.find(doc => doc.slug === `/${language}/${type}/${slug}`)

  if (!doc)
    notFound()

  return doc
}

export default function PostPage({ params: { language, type, slug } }: PageProps) {
  const doc = getDocFromParams(language, type, slug)
  return (
    <div className='flex flex-col'>
      {/* {JSON.stringify(doc.body.html)} */}
      {/* {doc.body.html} */}

      <Mdx code={doc.body.code } />

      <div>
        {doc.related_tags.map(item => <span key={item}>{item}</span>)}
      </div>
      <Post />
    </div>
  )
}
