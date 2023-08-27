'use client'

import { FigmaLogo, GithubLogo, Laptop } from 'phosphor-react'
import { Link } from '@/components/Lib/Link'
import type { Doc } from 'contentlayer/generated'

interface ArticleHeaderProps {
  doc: Doc
}

export function ArticleHeader({ doc }: ArticleHeaderProps) {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <h1 className='font-gambarino text-h1'>{doc.title}</h1>
        <div className='text-sm'>
          <small>21, January 2023</small>
          <small>{' 🞄 '}</small>
          <small>14 minutes</small>
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
