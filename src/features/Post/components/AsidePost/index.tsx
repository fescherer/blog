import { AdContainer, ArticleLinkCard, AsidePostIndex, Profile } from './components'
import { AllCategories, AllTags } from '@/components/AsideAllTagsAndCategories/components'
import type { Doc } from 'contentlayer/generated'

interface AsidePostProps {
  doc: Doc
  className?: string
}

export function AsidePost({ doc, className }: AsidePostProps) {
  return (
    <div className={`${className}`}>
      <aside className="relative flex h-full w-[320px] flex-col gap-2">

        <AdContainer />
        <AsidePostIndex doc={doc} />
        <ArticleLinkCard doc={doc} />
        <Profile author={doc.author } />
        {/* <Newsletter /> */}

        <AllCategories />
        <AllTags />
      </aside>
    </div>
  )
}
