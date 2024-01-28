'use client'

import { useState } from 'react'
import { PostIndexList } from './components'
import { Card } from '@/components/Lib/Card'
import type { IArticle, IArticleHeading } from '@/@types/Article'

interface AsidePostIndexProps {
  article: IArticle
}

export function AsidePostIndex({ article }: AsidePostIndexProps) {
  const [isHeadingExpanded, setIsHeadingExpanded] = useState(false)
  // Use regular expression to find all headings
  const headingsMatch = article.content.match(/(#+)\s+(.+)/g) || []

  // Convert the matches into an array of objects
  const headings = headingsMatch.map((match) => {
    const levelMatch = match.match(/#+/)
    const level = levelMatch ? levelMatch[0].length : 0
    const title = match.replace(/#+\s+/, '')
    return { level, title } as IArticleHeading
  })

  const firstHeadings = headings.slice(0, 5)
  const hiddenHeadings = headings.slice(5, headings.length)

  return (
    <Card title="On this article">
      <div className="flex flex-col">
        <div className="relative">

          <div className="flex flex-col gap-1">
            <PostIndexList list={firstHeadings} />
          </div>
        </div>

        <div className="grid transition-all duration-300" style={{ gridTemplateRows: isHeadingExpanded ? '1fr' : '0fr' }}>
          <div className="overflow-hidden">
            <PostIndexList list={hiddenHeadings} />
          </div>
        </div>

        {hiddenHeadings.length > 0
        && (
          <button type="button" onClick={() => setIsHeadingExpanded(prev => !prev)} className="design-link self-end text-sm">
            {isHeadingExpanded ? 'Expand less' : 'Expand more'}
          </button>
        )}
      </div>
    </Card>

  )
}
