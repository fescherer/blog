import { ScrollToTop } from './components'

export function ArticleMenu() {
  return (
    <div className='fixed bottom-5 right-5 z-50 flex gap-4 rounded p-1 text-brand-primary backdrop-blur'>
      <ScrollToTop />
    </div>
  )
}
