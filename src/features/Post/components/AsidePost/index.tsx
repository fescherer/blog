import { AdContainer, ArticleLinkCard, AsidePostIndex } from './components'
import { AllCategories, AllTags } from '@/components/AsideAllTagsAndCategories/components'
import type { Doc } from 'contentlayer/generated'

interface AsidePostProps {
  doc: Doc
  className?: string
}

export function AsidePost({ doc, className }: AsidePostProps) {
  return (
    <div className={`${className} sticky top-20 my-2 max-h-[calc(100vh-6rem)] overflow-y-scroll`}>
      <aside className=" flex h-full w-[320px] flex-col gap-2">

        <AdContainer />
        <AsidePostIndex doc={doc} />
        <ArticleLinkCard doc={doc} />
        {/* <Newsletter /> */}

        <AllCategories />
        <AllTags />
      </aside>
    </div>
  )
}
