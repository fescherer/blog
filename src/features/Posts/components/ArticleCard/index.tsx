import Image from 'next/image'
import readingTime from 'reading-time'

// import type { Doc } from 'contentlayer/generated'
import { getTimeFormated } from '@/utils/functions'
import { Link } from '@/components/Primitives'
import type { IArticle } from '@/@types/Article'

interface PostCardProps {
  data: IArticle
}

export function ArticleCard({ data }: PostCardProps) {
  const publishedDate = getTimeFormated(data.updated_at ? data.updated_at : data.published_date)
  const articleTime = Math.ceil(readingTime(data.content).minutes)

  return (
    <Link aria-label={`Link to article ${data.title}`} href={`${data.category}/${data.slug}`} target="_self" className="animate__zoomIn animate__animated group overflow-hidden rounded border border-bg-foreground group-hover:text-brand-primary-hover lg:border-none">
      <div className="relative overflow-hidden rounded">
        <div className="absolute z-10 size-full bg-[#000] opacity-30" />

        <div className="absolute bottom-0 left-0 z-20 flex w-full gap-2 p-2">
          {data.tags.map(item => <span key={item} className="rounded bg-bg-background px-2 text-xxs ">{item}</span>)}
        </div>

        <Image
          className="w-full transition-all group-hover:scale-110 "
          src={data.image}
          alt="article image"
          width={853}
          height={568}
        />
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

      <h2 className="px-2 text-bg-on-background transition-all group-hover:text-brand-primary lg:px-0">{data.title}</h2>

      <p className="line-clamp-3 px-2 text-justify transition-all group-hover:text-brand-primary lg:px-0">
        {data.content}
      </p>
    </Link>
  )
}
