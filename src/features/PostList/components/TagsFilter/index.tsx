import { getAllTags } from '@/utils/functions'
import { getPostsData } from '@/utils/functions/getPostsData'
import Link from 'next/link'

type TagsFilterProps = {
  selectedTag: string
}

export async function TagsFilter({ selectedTag }: TagsFilterProps) {
  const articles = await getPostsData()
  const alltags = getAllTags(articles)

  return (
    <div className="flex flex-wrap gap-2 text-xs">
      {
        alltags.map(tag => (
          <Link
            target="_self"
            href={selectedTag === tag ? '/' : `/tag/${tag}`}
            aria-label={`Remove tag selection filter for ${tag}`}
            key={tag}
            className={`rounded-md border border-bg-foreground p-1 capitalize transition-all hover:border-bg-on-background hover:text-bg-on-background ${selectedTag === tag ? 'text-bg-on-background' : 'text-bg-foreground'}`}
          >
            {tag}
          </Link>
        ))
      }
    </div>
  )
}
