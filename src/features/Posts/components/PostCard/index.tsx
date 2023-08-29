'use client'

import { ArrowUpRight } from 'phosphor-react'
import { Link } from '@/components/Lib/Link'
import { getTimeFormated } from '@/utils/functions'
import type { Doc } from 'contentlayer/generated'

interface PostCardProps {
  data: Doc
}

export function PostCard({ data }: PostCardProps) {
  const publishedDate = getTimeFormated(data.published_date)
  return (
    <div className='flex h-60 w-80 flex-col gap-2 rounded bg-[#ffffff0a] p-4 '>
      <div className='flex justify-between'>
        <small className='text-xs'>{publishedDate}</small>
        <ArrowUpRight size={16} />
      </div>

      <h2><Link href={data.slug} target='_self'>{data.title}</Link></h2>

      <p className='flex-1'>{data.description}</p>

      <div className='flex gap-2'>
        {data.tags.map(item => <span key={item} className='rounded bg-background px-2 text-xxs'>{item}</span>)}
      </div>

    </div>

  )
}
