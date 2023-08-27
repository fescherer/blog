'use client'

import { FigmaLogo, GithubLogo, Laptop } from 'phosphor-react'
import readingTime from 'reading-time'
import { Link } from '@/components/Lib/Link'
import type { Doc } from 'contentlayer/generated'

interface ArticleHeaderProps {
  doc: Doc
}

export function ArticleHeader({ doc }: ArticleHeaderProps) {
  const date = new Date(doc.published_date)
  const publishedDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)

  return (
    <div className='flex items-center justify-between gap-2'>
      <div>
        <h1 className='font-gambarino text-h1'>{doc.title}</h1>
        <div className='text-sm'>
          <small><time>{publishedDate}</time>{` 🞄  ${Math.ceil(readingTime(doc.body.raw).minutes)} minutes read`}</small>
        </div>
      </div>

      <div className='flex gap-2'>
        <Link href={''}>
          <Laptop size={24} />
        </Link>
        <Link href={''}>
          <FigmaLogo size={24} />
        </Link>
        <Link href={''}>
          <GithubLogo size={24} />
        </Link>
      </div>
    </div>
  )
}
