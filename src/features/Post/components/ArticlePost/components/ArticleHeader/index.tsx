'use client'

import readingTime from 'reading-time'
import { ArrowFatLinesUp, CalendarBlank, Coffee } from 'phosphor-react'
import { ItemHeader, ItemSeparator } from './components'
import type { Doc } from 'contentlayer/generated'
import { getTimeFormated } from '@/utils/functions'

interface ArticleHeaderProps {
  doc: Doc
}

export function ArticleHeader({ doc }: ArticleHeaderProps) {
  const publishedDate = getTimeFormated(doc.published_date)
  const updatedDate = doc.updated_at ? getTimeFormated(doc.updated_at) : ''

  return (
    <div className='flex items-center justify-between gap-2'>
      <div>
        <div className='flex gap-2'>
          {doc.tags.map(item => (
            <small key={item} className='text-xxs capitalize'>
              {item}
            </small>
          ))}
        </div>
        <h1 className='font-cabinetGrotesk text-h1'>{doc.title}</h1>
        <small className='flex flex-wrap gap-4 text-xs'>
          <ItemHeader
              icon={<CalendarBlank size={12} />}
              date={publishedDate}
              title={`Published at ${publishedDate}`}
          />
          <ItemSeparator />
          {
            updatedDate
              ? (
                <ItemHeader
                    icon={<ArrowFatLinesUp size={12} />}
                    date={updatedDate}
                    title={`Updated at ${updatedDate}`}
                />
                )
              : null
            }
          {updatedDate ? <ItemSeparator /> : null}
          <ItemHeader
              icon={<Coffee size={12} />}
              date={Math.ceil(readingTime(doc.body.raw).minutes)}
              title={`${Math.ceil(readingTime(doc.body.raw).minutes)} minutes read`}
          />
        </small>
      </div>

    </div>
  )
}
