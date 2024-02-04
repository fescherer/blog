import { AdContainer, ArticleLinkCard, AsidePostIndex } from './components'
import type { IArticle } from '@/@types/Article'
import { AllCategories, AllTags } from '@/components/AsideAllTagsAndCategories/components'

interface AsidePostProps {
  article: IArticle
  className?: string
}

export function AsidePost({ article, className }: AsidePostProps) {
  return (
    <div className={`${className} styled-scrollbars sticky top-20 my-2 max-h-[calc(100vh-6rem)] overflow-y-scroll`}>
      <aside className=" flex h-full w-[320px] flex-col gap-2">

        <AdContainer />
        <AsidePostIndex article={article} />
        <ArticleLinkCard article={article} />
        {/* <Newsletter /> */}

        <AllCategories />
        <AllTags />
      </aside>
    </div>
  )
}
