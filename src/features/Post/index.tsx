import {
  ArticleMenu,
  ArticlePost,
  AsidePost,
  ReadingBarIndicator,
} from './components'
import { AsidePostIndex } from './components/AsidePost/components'
import type { IArticle } from '@/@types/Article'

// import type { Doc } from 'contentlayer/generated'

interface PostProps {
  article: IArticle
}

export function Post({ article }: PostProps) {
  return (
    <div className="relative">
      <ReadingBarIndicator />

      <div className="block lg:hidden">
        <AsidePostIndex article={article} />
      </div>

      <div className="relative flex max-w-full items-start gap-2">
        <ArticleMenu />
        <ArticlePost article={article} />
        {/* hidden lg:block */}
        <AsidePost article={article} className="hidden lg:block" />
      </div>

    </div>
  )
}
