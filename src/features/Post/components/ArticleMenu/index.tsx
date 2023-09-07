'use client'

import { ArrowCircleUp } from 'phosphor-react'
import { Menu } from './components'
import type { Doc } from 'contentlayer/generated'

interface ArticleMenuProps {
  doc: Doc
}

export function ArticleMenu({ doc }: ArticleMenuProps) {
  return (
    <div className='fixed bottom-5 right-5 z-50 flex gap-4 rounded p-1 text-primary backdrop-blur'>
      <Menu doc={doc} />
      <button onClick={() => window.scroll(0, 0)} type="button" className='transition-all hover:text-primary-hover'>
        <ArrowCircleUp weight='fill' size={48} />
      </button>
    </div>
  )
}
