'use client'

import { useState } from 'react'
import { PostIndexList } from './components'
import type { Doc } from 'contentlayer/generated'
import { Card } from '@/components/Lib/Card'
import type { DocHeading } from '@/@types/Article'

interface AsidePostIndexProps {
  doc: Doc
}

export function AsidePostIndex({ doc }: AsidePostIndexProps) {
  const [isHeadingExpanded, setIsHeadingExpanded] = useState(false)
  const headings = doc.headings as DocHeading[]

  const firstHeadings = headings.slice(0, 5)
  const hiddenHeadings = headings.slice(5, headings.length)

  return (
    <Card title="On this article">
      <div className='flex flex-col'>
        <div className='relative'>

          <div className='flex flex-col gap-1'>
            <PostIndexList list={firstHeadings} />
          </div>
        </div>
        <div className='grid transition-all duration-300' style={{ gridTemplateRows: isHeadingExpanded ? '1fr' : '0fr' }}>
          <div className='overflow-hidden'>
            <PostIndexList list={hiddenHeadings} />
          </div>
        </div>
        {hiddenHeadings.length > 0
            && (
            <button type="button" onClick={() => setIsHeadingExpanded(prev => !prev)} className='design-link self-end text-sm'>
              {isHeadingExpanded ? 'Expand less' : 'Expand more'}
            </button>
            )
          }
      </div>
    </Card>

  )
}
