import { ArticleHeader, Rating, Sharing } from './components'
import type { Doc } from 'contentlayer/generated'
import { Mdx } from '@/components/Lib/MdxComponents'

interface ArticlePostProps {
  doc: Doc
}

export function ArticlePost({ doc }: ArticlePostProps) {
  return (
    <article className="p-2 flex-col gap-4 px-8 flex min-w-0">

      <div>
        <small className='text-xs'>Home - Category - Article</small>

        <ArticleHeader doc={doc} />
      </div>

      <div className='bg-foreground border border-background w-[80%] h-96 m-auto rounded-md' />

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
