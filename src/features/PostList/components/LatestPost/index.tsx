import { IArticle } from '@/@types/Article'
import { getTimeFormated } from '@/utils/functions'
import Image from 'next/image'
import Link from 'next/link'
import readingTime from 'reading-time'

interface PostsProps {
  article: IArticle
}

export function LatestPost({ article }: PostsProps) {
  const publishedDate = getTimeFormated(article.updated_at ? article.updated_at : article.published_date)
  const articleTime = Math.ceil(readingTime(article.content).minutes)

  return (
    <Link aria-label={`Link to article ${article.title}`} href={`${article.category}/${article.slug}`} target="_self" className="animate__zoomIn animate__animated group mb-4 flex flex-col gap-4 overflow-hidden rounded border border-bg-foreground group-hover:text-brand-primary-hover md:flex-row lg:border-none">

      <div style={{ minWidth: 853 / 2 }} className="overflow-hidden rounded">
        <Image className="w-full transition-all group-hover:scale-110" src={article.image} width={853 / 2} height={568 / 2} alt="post image" />
      </div>

      <div className="flex flex-col items-baseline gap-4 p-2">
        <div className="rounded-full border border-brand-primary px-4 text-brand-primary">
          Latest Post
        </div>

        <div className="flex-1">
          <h2 className="text-bg-on-background transition-all group-hover:text-brand-primary">{article.title}</h2>

          <p className="line-clamp-3 text-justify transition-all group-hover:text-brand-primary md:line-clamp-6">
            {article.content}
          </p>

        </div>

        <div className="mt-2 flex justify-between px-2 transition-all group-hover:text-brand-primary-hover lg:px-0">
          <small className="flex flex-col items-center font-bold sm:flex-row sm:gap-2">
            <time dateTime={publishedDate}>{publishedDate}</time>
            <span className="hidden sm:block">·</span>

            <small>
              {' '}
              {`${articleTime} minute${articleTime > 1 ? 's' : ''} read`}
            </small>
          </small>

        </div>
      </div>
    </Link>
  )
}
