'use client'

import { useEffect, useState } from 'react'
import { CaretRight } from 'phosphor-react'
import type { Doc } from 'contentlayer/generated'
import { Card } from '@/components/Lib/Card'

interface AsidePostIndexProps {
  doc: Doc
}
export interface DocHeading { level: 1 | 2 | 3; title: string }

export function sluggifyTitle(title: string) {
  const re = /[^\w\s]/g

  return title.trim().toLowerCase().replace(re, '').replace(/\s+/g, '-')
}

export function getNodeText(node: React.ReactNode): string {
  if (typeof node === 'string')
    return node
  if (typeof node === 'number')
    return node.toString()
  if (Array.isArray(node))
    return node.map(getNodeText).join('')

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (typeof node === 'object' && (node as any)?.props?.children)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    return getNodeText((node as any).props.children)

  return ''
}

export function AsidePostIndex({ doc }: AsidePostIndexProps) {
  const headings = doc.headings as DocHeading[]

  const [activeHeading, setActiveHeading] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      let current = ''
      for (const heading of headings) {
        const slug = sluggifyTitle(getNodeText(heading.title))
        const element = document.getElementById(slug)
        if (element && element.getBoundingClientRect().top < 240)
          current = slug
      }
      setActiveHeading(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings])

  const headingsToRender = headings.filter(_ => _.level > 1)

  if ((headingsToRender ?? []).length === 0)
    return null

  return (
    <aside className='hidden md:block'>
      <Card className='sticky top-[70px] max-w-[260px]'>
        <h4>On this article</h4>
        <ul className="space-y-2">
          {headingsToRender.map(({ title, level }) => (
            <li key={`${title}-${level}`}>
              <a
                  href={`#${sluggifyTitle(getNodeText(title))}`}
                  style={{ marginLeft: (level - 2) * 16 }}
                  className={`flex text-sm text-text ${
                sluggifyTitle(getNodeText(title)) === activeHeading
                  ? 'text-primary'
                  : 'hover:text-secondary'
              }`}
              >
                <span className="mr-2 mt-[5px] block w-1.5 shrink-0">
                  <CaretRight />
                </span>
                <span
                  // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: title.replace('`', '<code style="font-size: 0.75rem;">').replace('`', '</code>'),
                    }}
                />
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </aside>
  )
}
