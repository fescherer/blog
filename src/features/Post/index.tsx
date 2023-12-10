import {
  ArticleMenu,
  ArticlePost,
  AsidePost,
  ReadingBarIndicator,
} from './components'
import { AsidePostIndex } from './components/AsidePost/components'
import type { Doc } from 'contentlayer/generated'

interface PostProps {
  doc: Doc
}

export function Post({ doc }: PostProps) {
  return (
    <div className='relative'>
      <ReadingBarIndicator />

      {/* <MobileMenuArticle>
        <AsidePost doc={doc} />
      </MobileMenuArticle> */}

      <div className='block lg:hidden'>
        <AsidePostIndex doc={doc} />
      </div>

      <div className="relative flex max-w-full items-start gap-2">
        <ArticleMenu />
        <ArticlePost doc={doc} />
        {/* hidden lg:block */}
        <AsidePost doc={doc} className='hidden lg:block' />
      </div>

    </div>
  )
}
