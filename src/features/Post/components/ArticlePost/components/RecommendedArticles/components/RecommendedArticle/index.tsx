import readingTime from 'reading-time'
import { Link } from '@/components/Lib/Link'
import { getTimeFormated } from '@/utils/functions'
import type { IRecommendedArticle } from '@/@types/Article'

interface RecommendedArticleProps {
  article: IRecommendedArticle
}

export function RecommendedArticle({ article }: RecommendedArticleProps) {
  const publishedDate = getTimeFormated(article.article.published_date)
  const articleTime = Math.ceil(readingTime(article.article.content).minutes)

  return (
    <Link aria-label={`Go to article ${article.article.title}`} target="_self" className=" w-full rounded border border-bg-foreground p-2 lg:w-1/3" href={article.article.slug}>
      <div className="flex flex-col gap-1 text-xs">
        <time dateTime={publishedDate}>{publishedDate}</time>

        <small>
          {' '}
          {`${articleTime} minute${articleTime > 1 ? 's' : ''} read`}
        </small>
      </div>

      <h3>{article.article.title}</h3>

      <p className="line-clamp-2 px-2 text-justify text-xs transition-all group-hover:text-brand-primary-hover lg:px-0">
        {article.article.content}
      </p>
    </Link>
  )
}
