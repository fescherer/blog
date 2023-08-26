import { ArticlePost, AsidePost } from './components'
import type { Doc } from 'contentlayer/generated'

interface PostProps {
  doc: Doc
}

export function Post({ doc }: PostProps) {
  return (
    <div className="grid grid-cols-[auto,1fr] relative gap-2 max-w-full">
      <ArticlePost doc={doc} />
      <AsidePost />
    </div>
  )
}
