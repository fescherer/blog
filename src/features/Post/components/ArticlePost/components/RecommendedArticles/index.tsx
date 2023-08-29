'use client'

import { Link } from '@/components/Lib/Link'
import { getRecommendedArticles } from '@/utils/functions'
import { type Doc, allDocs } from 'contentlayer/generated'

interface RecommendedArticlesProps {
  doc: Doc
}

export function RecommendedArticles({ doc }: RecommendedArticlesProps) {
  const recommendedArticles = getRecommendedArticles(allDocs, doc)

  return (
    <section>
      <h3>You may also like</h3>
      <button type="button" onClick={() => getRecommendedArticles(allDocs, doc)}>Generate again</button>
      <div className='flex gap-2'>
        {recommendedArticles.map(article => (
          <Link key={article.id} className='w-64 bg-foreground' href={article.doc.slug}>
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
