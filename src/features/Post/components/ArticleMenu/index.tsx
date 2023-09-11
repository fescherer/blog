import { Menu, ScrollToTop } from './components'
import type { Doc } from 'contentlayer/generated'

interface ArticleMenuProps {
  doc: Doc
}

export function ArticleMenu({ doc }: ArticleMenuProps) {
  return (
    <div className='fixed bottom-5 right-5 z-50 flex gap-4 rounded p-1 text-primary backdrop-blur'>
      <Menu doc={doc} />
      <ScrollToTop />
    </div>
  )
}
