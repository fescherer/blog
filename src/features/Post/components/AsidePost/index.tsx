import { AdContainer, ArticleDetails, Profile } from './components'
import type { Doc } from 'contentlayer/generated'

interface AsidePostProps {
  doc: Doc
  className?: string
}

export function AsidePost({ doc, className }: AsidePostProps) {
  return (
    <div className={`${className}`}>
      <aside className="sticky top-[70px] flex h-max w-[320px] flex-col gap-2">
        <AdContainer />
        <ArticleDetails doc={doc} />
        <Profile author={doc.author } />
        {/* <Newsletter /> */}
      </aside>
    </div>
  )
}
