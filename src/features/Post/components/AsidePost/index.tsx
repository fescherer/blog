import { AdContainer, ArticleDetails, Newsletter, Profile } from './components'
import type { Doc } from 'contentlayer/generated'

interface AsidePostProps {
  doc: Doc
}

export function AsidePost({ doc }: AsidePostProps) {
  return (
    <div className=''>
      <aside className="sticky top-[70px] hidden h-max w-[320px] flex-col gap-2 lg:flex">
        <AdContainer />
        <ArticleDetails doc={doc} />
        <Profile />
        <Newsletter />
      </aside>
    </div>
  )
}
