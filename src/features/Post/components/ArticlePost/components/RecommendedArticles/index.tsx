import { RecommendedArticle } from './components'
import type { IArticle } from '@/@types/Article'
import { getPostsData } from '@/utils/functions/getPostsData'
import { getRecommendedArticles } from '@/utils/functions'

interface RecommendedArticlesProps {
  article: IArticle
}

export async function RecommendedArticles({ article }: RecommendedArticlesProps) {
  const allArticles = await getPostsData()
  const recommendedArticles = getRecommendedArticles(article, allArticles)

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
