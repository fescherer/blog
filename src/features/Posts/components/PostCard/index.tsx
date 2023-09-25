'use client'

import { ArrowUpRight } from 'phosphor-react'
import readingTime from 'reading-time'
import { Link } from '@/components/Lib/Link'
import { getTimeFormated } from '@/utils/functions'
import type { Doc } from 'contentlayer/generated'

interface PostCardProps {
  data: Doc
}

export function PostCard({ data }: PostCardProps) {
  const publishedDate = getTimeFormated(data.published_date)
  const articleTime = Math.ceil(readingTime(data.body.raw).minutes)

  return (
    <div className='flex h-60 w-80 flex-col gap-2 rounded bg-background-card p-4 '>
      <div className='flex justify-between'>

        <div className='flex flex-col gap-1 text-xs'>
          <time dateTime={publishedDate}>{publishedDate}</time>
          <small> {`${articleTime} minute${articleTime > 1 ? 's' : ''} read`}</small>
        </div>
        <ArrowUpRight size={16} />
      </div>

      <h2><Link aria-label={`Link to article ${data.title}`} href={data.slug} target='_self'>{data.title}</Link></h2>

      <p className='flex-1'>{data.description}</p>

      <div className='flex gap-2'>
        {data.tags.map(item => <span key={item} className='rounded bg-background px-2 text-xxs'>{item}</span>)}
      </div>

    </div>

  )
}
