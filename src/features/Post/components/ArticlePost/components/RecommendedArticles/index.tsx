'use client'

import readingTime from 'reading-time'
import { Link } from '@/components/Lib/Link'
import { getRecommendedArticles, getTimeFormated } from '@/utils/functions'
import { type Doc, allDocs } from 'contentlayer/generated'

interface RecommendedArticlesProps {
  doc: Doc
}

export function RecommendedArticles({ doc }: RecommendedArticlesProps) {
  const recommendedArticles = getRecommendedArticles(allDocs, doc)
  const publishedDate = getTimeFormated(doc.published_date)
  const articleTime = Math.ceil(readingTime(doc.body.raw).minutes)

  return (
    <section>
      <h3>You may also like</h3>
      <div className='flex w-full flex-col gap-2 lg:flex-row'>
        {recommendedArticles.map(article => (
          <Link key={article.id} target='_self' className=' w-full rounded bg-foreground p-2 lg:w-1/3' href={article.doc.slug}>
            <div className='flex flex-col gap-1 text-xs'>
              <time>{publishedDate}</time>
              <small> {`${articleTime} minute${articleTime > 1 ? 's' : ''} read`}</small>
            </div>
            <h3>{article.doc.title}</h3>

            <p>
              {article.doc.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
