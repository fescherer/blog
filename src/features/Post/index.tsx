import {
  ArticleMenu,
  ArticlePost,
  AsidePost,
  AsidePostIndex,
  ReadingBarIndicator,
} from './components'
import type { Doc } from 'contentlayer/generated'

interface PostProps {
  doc: Doc
}

export function Post({ doc }: PostProps) {
  return (
    <div className='relative'>
      <ReadingBarIndicator />

      <div className="relative flex max-w-full gap-2">
        <ArticleMenu doc={doc} />
        <AsidePostIndex doc={doc} className='hidden md:block' />
        <ArticlePost doc={doc} />
        <AsidePost doc={doc} className='hidden lg:block' />
      </div>
    </div>
  )
}
