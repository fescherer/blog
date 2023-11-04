import readingTime from 'reading-time'
import type { IRecommendedArticle } from '@/@types'
import { Link } from '@/components/Lib/Link'
import { getTimeFormated } from '@/utils/functions'

interface RecommendedArticleProps {
  article: IRecommendedArticle
}

export function RecommendedArticle({ article }: RecommendedArticleProps) {
  const publishedDate = getTimeFormated(article.doc.published_date)
  const articleTime = Math.ceil(readingTime(article.doc.body.raw).minutes)

  return (
    <Link aria-label={`Go to article ${article.doc.title}`} target='_self' className=' w-full rounded bg-foreground p-2 lg:w-1/3' href={article.doc.slug}>
      <div className='flex flex-col gap-1 text-xs'>
        <time dateTime={publishedDate}>{publishedDate}</time>
        <small> {`${articleTime} minute${articleTime > 1 ? 's' : ''} read`}</small>
      </div>
      <h3>{article.doc.title}</h3>

      <p className='line-clamp-2 px-2 text-justify text-xs transition-all group-hover:text-primary lg:px-0'>
        {article.doc.body.raw}
      </p>
    </Link>
  )
}
