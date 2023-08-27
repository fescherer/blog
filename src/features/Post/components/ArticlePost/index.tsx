import { ArticleHeader, Rating, Sharing } from './components'
import type { Doc } from 'contentlayer/generated'
import { Mdx } from '@/components/Lib/MdxComponents'

interface ArticlePostProps {
  doc: Doc
}

export function ArticlePost({ doc }: ArticlePostProps) {
  return (
    <article className="flex min-w-0 flex-col gap-4 p-2 lg:px-8">

      <div>
        <small className='text-xs'>Home - Category - Article</small>

        <ArticleHeader doc={doc} />
      </div>

      <div className='m-auto h-96 w-[80%] rounded-md border border-background bg-foreground' />

      <div className='text-justify text-base'>
        <Mdx code={doc.body.code } />
      </div>

      <section className='flex flex-col gap-4'>
        <Rating />

        <Sharing />
      </section>
    </article>
  )
}
