'use client'

import { RecommendedArticle } from './components'
import { getRecommendedArticles } from '@/utils/functions'
import { type Doc } from 'contentlayer/generated'

interface RecommendedArticlesProps {
  doc: Doc
}

export function RecommendedArticles({ doc }: RecommendedArticlesProps) {
  const recommendedArticles = getRecommendedArticles(doc)

  return (
    <section>
      <h3>You may also like</h3>
      <div className='flex w-full flex-col gap-2 lg:flex-row'>
        {recommendedArticles.map(article => (
          <RecommendedArticle key={article.id} article={article} />
        ))}
      </div>
    </section>
  )
}
