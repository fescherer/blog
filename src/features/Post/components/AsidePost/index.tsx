import { AdContainer, ArticleDetails, Newsletter, Profile } from './components'
import { SummaryNavigation } from './components/SummaryNavigation'
import type { Doc } from 'contentlayer/generated'

interface AsidePostProps {
  doc: Doc
}

export function AsidePost({ doc }: AsidePostProps) {
  return (
    <aside className="hidden h-full w-[320px] flex-col gap-2 lg:flex">
      <SummaryNavigation doc={doc} />
      <AdContainer />
      <ArticleDetails />
      <Profile />
      <Newsletter />
    </aside>
  )
}
