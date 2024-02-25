import Image from 'next/image'
import dynamic from 'next/dynamic'
import { ArticleHeader, Author } from './components'
import { RecommendedArticles } from './components/RecommendedArticles'
import { SourcesRef } from './components/SourcesRef'
import { NavigationHeader } from './components/NavigationHeader'
import { Separator } from '@/components/Lib'
import type { IArticle } from '@/@types/Article'
import { ContributeInGithub } from './components/ContributeInGithub'

interface ArticlePostProps {
  article: IArticle
}

export function ArticlePost({ article }: ArticlePostProps) {
  const MarkdownContent = dynamic(
    () => import(`@/blog/${article.category}/${article.slug}.mdx`),
  )

  return (
    <article className="flex min-w-0 flex-1 flex-col gap-4 p-2 lg:px-8">

      <div>
        <NavigationHeader article={article} />
        <ArticleHeader article={article} />
      </div>

      <Image
        alt=""
        height={568}
        width={853}
        src={article.image}
        quality={100}
        className="animate__zoomIn animate__animated mx-auto rounded-lg border border-bg-background bg-bg-foreground"
      />

      <div className="text-justify text-base">
        <MarkdownContent />
      </div>

      <Separator dataOrientation="horizontal" />
      <SourcesRef article={article} />
      {/* <section className='flex flex-col gap-4'>
        <Rating />

        <Sharing />
      </section> */}

      <Separator dataOrientation="horizontal" />
      {/* {
        article.related_articles?.length
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

      <ContributeInGithub article={article} />
      <Separator dataOrientation="horizontal" />
      <Author article={article} />
      <Separator dataOrientation="horizontal" />
      <RecommendedArticles article={article} />
    </article>
  )
}
