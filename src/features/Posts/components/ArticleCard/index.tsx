import Image from 'next/image'
import readingTime from 'reading-time'
import type { Doc } from 'contentlayer/generated'
import { getTimeFormated } from '@/utils/functions'
import { Link } from '@/components/Primitives'

interface PostCardProps {
  data: Doc
}

export function ArticleCard({ data }: PostCardProps) {
  const publishedDate = getTimeFormated(data.published_date)
  const articleTime = Math.ceil(readingTime(data.body.raw).minutes)

  return (
    <Link aria-label={`Link to article ${data.title}`} href={data.slug} target='_self' className='group overflow-hidden rounded border border-foreground group-hover:text-primary lg:border-none'>
      <div className="relative overflow-hidden rounded">
        <div className='absolute bottom-0 left-0 z-10 flex w-full gap-2 p-2 backdrop-blur-sm'>
          {data.tags.map(item => <span key={item} className='rounded bg-background px-2 text-xxs '>{item}</span>)}
        </div>
        <Image
            className='w-full transition-all group-hover:scale-110'
            src={data.image}
            alt="article image"
            width={853}
            height={568}
        />
      </div>
      <div className='mt-2 flex justify-between px-2 transition-all group-hover:text-primary lg:px-0'>
        <small className='flex flex-col items-center font-bold sm:flex-row sm:gap-2'>
          <time dateTime={publishedDate}>{publishedDate}</time>
          <span className='hidden sm:block'>·</span>
          <small> {`${articleTime} minute${articleTime > 1 ? 's' : ''} read`}</small>
        </small>

      </div>

      <h2 className='px-2 transition-all group-hover:text-primary lg:px-0'>{data.title}</h2>

      <p className='px-2 text-justify transition-all group-hover:text-primary lg:px-0'>{data.description}</p>
    </Link>
  )
}
