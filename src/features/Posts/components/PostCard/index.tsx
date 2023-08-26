'use client'

import { Link } from '@/components/Lib/Link'
import type { Doc } from 'contentlayer/generated'

interface PostCardProps {
  data: Doc
}

export function PostCard({ data }: PostCardProps) {
  return (
    <div className='bg-foreground rounded w-80 h-60 p-4'>
      <h2><Link href={data.slug} target='_self'>{data.title}</Link></h2>

      <p>{data.description}</p>

    </div>

  )
}
