import { ArticlePost, AsidePost } from './components'
import type { Doc } from 'contentlayer/generated'

interface PostProps {
  doc: Doc
}

export function Post({ doc }: PostProps) {
  return (
    <div className="relative grid max-w-full grid-cols-1 gap-2 lg:grid-cols-[7fr,3fr]">
      <ArticlePost doc={doc} />
      <AsidePost doc={doc} />
    </div>
  )
}
