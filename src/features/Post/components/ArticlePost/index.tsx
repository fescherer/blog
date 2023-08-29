import { ArticleHeader, Rating, Sharing } from './components'
import { NavigationHeader } from './components/NavigationHeader'
import type { Doc } from 'contentlayer/generated'
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

      {
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
      }

      <section>
        <h3>You may also like</h3>

        {/* aqui vou criar um algoritmo que captura os artigos parecidos com esse. como? Pelas tags
        Será feito uma função que varre todos os artigos e procura por tags parecidas com o desse artigo. para cada tag encontrada é um ponto na nota daquele artigo. No fim, deveremos ter um lista dos artigos mais parecidos com esse. Assim, podemos dar um trim de quantos itens quisermos.

        Para melhorar ainda mais, podemos usar os artigos relacionados
    */}

        <div className='flex gap-2'>
          <div className='h-20 w-1/3 bg-foreground' />
          <div className='h-20 w-1/3 bg-foreground' />
          <div className='h-20 w-1/3 bg-foreground' />
        </div>
      </section>
    </article>
  )
}
