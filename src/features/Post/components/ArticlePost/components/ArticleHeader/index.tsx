'use client'

import readingTime from 'reading-time'
import type { Doc } from 'contentlayer/generated'
import { getTimeFormated } from '@/utils/functions'

interface ArticleHeaderProps {
  doc: Doc
}

export function ArticleHeader({ doc }: ArticleHeaderProps) {
  const publishedDate = getTimeFormated(doc.published_date)

  return (
    <div className='flex items-center justify-between gap-2'>
      <div>
        <h1 className='font-gambarino text-h1'>{doc.title}</h1>
        <div className='text-sm'>
          <small><time>{publishedDate}</time>{` 🞄  ${Math.ceil(readingTime(doc.body.raw).minutes)} minutes read`}</small>
        </div>
      </div>

    </div>
  )
}
