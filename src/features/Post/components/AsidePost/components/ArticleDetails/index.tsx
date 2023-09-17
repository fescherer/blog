'use client'

import { Card } from '@/components/Lib/Card'
import { Link } from '@/components/Lib/Link'
import { getTimeFormated } from '@/utils/functions'
import type { Doc } from 'contentlayer/generated'

interface ArticleDetailsProps {
  doc: Doc
}

export function ArticleDetails({ doc }: ArticleDetailsProps) {
  const publishedDate = getTimeFormated(doc.published_date)

  return (
    <Card className='flex flex-col gap-2' title="Article Details">

      <div>
        <h3>Date:</h3>
        <span className='text-sm'>{publishedDate}</span>
      </div>

      <div>
        <h3>Category</h3>
        <span className='text-sm capitalize'>{doc._raw.sourceFileDir.split('/')[1]}</span>
      </div>

      <div>
        <h3>Tags:</h3>
        <div className='flex flex-wrap gap-2 text-sm'>
          {
            doc.tags.map(item => (
              <span key={item} className='my-1 whitespace-pre rounded-full bg-background px-4 py-1 text-xxs capitalize'>
                {item}
              </span>
            ),
            )
          }
        </div>
      </div>

      <div>
        <h3>Links:</h3>
        <div className='flex gap-2 text-sm'>
          {
            doc.project_url ? <Link href={doc.project_url}>Deploy</Link> : null
          }
          {
            doc.figma_url ? <Link href={doc.figma_url}>Figma</Link> : null
          }
          {
            doc.github_url ? <Link href={doc.github_url}>Github</Link> : null
          }
          {
            doc.video_url ? <Link href={doc.video_url}>Video</Link> : null
          }
          {
            !(doc.project_url && doc.figma_url && doc.github_url && doc.video_url) ? <span>-</span> : null
          }
        </div>
      </div>
    </Card>
  )
}
