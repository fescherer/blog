'use client'

import { Link } from '@/components/Lib/Link'
import type { Doc } from 'contentlayer/generated'

interface PostCardProps {
  data: Doc
}

export function PostCard({ data }: PostCardProps) {
  return (
    <div className='h-60 w-80 rounded bg-foreground p-4'>
      <h2><Link href={data.slug} target='_self'>{data.title}</Link></h2>

      <p>{data.description}</p>

    </div>

  )
}
