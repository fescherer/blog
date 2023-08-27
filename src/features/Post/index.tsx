import { ArticlePost, AsidePost } from './components'
import { AsidePostIndex } from './components/AsidePostIndex'
import type { Doc } from 'contentlayer/generated'

interface PostProps {
  doc: Doc
}

export function Post({ doc }: PostProps) {
  return (
    <div className="relative flex max-w-full gap-2">
      <AsidePostIndex doc={doc} />
      <ArticlePost doc={doc} />
      <AsidePost doc={doc} />
    </div>
  )
}
