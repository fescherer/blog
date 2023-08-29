import { ArticleHeader, Rating, Sharing } from './components'
import { NavigationHeader } from './components/NavigationHeader'
import { RecommendedArticles } from './components/RecommendedArticles'
import { type Doc } from 'contentlayer/generated'
import { Mdx } from '@/components/Lib/MdxComponents'
import { Separator } from '@/components/Lib'

interface ArticlePostProps {
  doc: Doc
}

export function ArticlePost({ doc }: ArticlePostProps) {
  return (
    <article className="flex min-w-0 flex-1 flex-col gap-4 p-2 lg:px-8">

      <div>
        <NavigationHeader doc={doc} />

        <ArticleHeader doc={doc} />
      </div>

      <div className='h-96 w-[100%] rounded-md border border-background bg-foreground' />

      <div className='text-justify text-base'>
        <Mdx code={doc.body.code } />
      </div>

      <section className='flex flex-col gap-4'>
        <Rating />

        <Sharing />
      </section>

      <Separator dataOrientation='horizontal' />

      {/* {
        doc.related_articles?.length
          ? (
            <section>
              <h3>Related articles</h3>

              <div className='flex gap-2 overflow-auto'>
                {doc.related_articles.map(item => <pre key={item} className='w-80 bg-foreground px-2'>{item}</pre>)}
              </div>
            </section>
            )
          : null
      } */}

      <RecommendedArticles doc={doc} />

    </article>
  )
}
