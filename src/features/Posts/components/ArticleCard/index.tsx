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
    <Link aria-label={`Link to article ${data.title}`} href={data.slug} target='_self' className='group max-w-[500px] overflow-hidden rounded group-hover:text-primary'>
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
      <div className='mt-2 flex justify-between transition-all group-hover:text-primary'>
        <small className='flex items-center gap-2 font-bold'>
          <time dateTime={publishedDate}>{publishedDate}</time>
          ·
          <p> {`${articleTime} minute${articleTime > 1 ? 's' : ''} read`}</p>
        </small>

      </div>

      <h2 className='transition-all group-hover:text-primary'>{data.title}</h2>

      <p className='text-justify transition-all group-hover:text-primary'>{data.description}</p>
    </Link>
  )
}
