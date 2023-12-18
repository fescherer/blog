import clsx from 'clsx'
import { Card } from '@/components/Lib/Card'
import { Link } from '@/components/Lib/Link'
import { getAllTags } from '@/utils/functions'

interface AllTagsProps {
  selectedTag?: string
}

export function AllTags({ selectedTag }: AllTagsProps) {
  const alltags = getAllTags()

  return (
    <Card title='All tags'>
      <div className='flex flex-wrap gap-1 text-xs uppercase'>
        {alltags.map((tag, index) => (
          <Link
              aria-label={`Remove tag selection filter for ${tag}`}
              className={clsx({ 'text-brand-primary font-bold': selectedTag === tag })}
              target='_self'
              href={selectedTag === tag ? '/' : `/tag/${tag}`}
              key={tag}
          >{tag}{index !== alltags.length - 1 ? ' /' : ''}
          </Link>
        ))}
      </div>
    </Card>
  )
}
