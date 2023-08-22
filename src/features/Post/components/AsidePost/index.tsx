import { AdContainer, ArticleDetails, Newsletter, Profile } from './components'

export function AsidePost() {
  return (
    <aside className="flex flex-col gap-2 sticky top-[1%] h-max min-w-[320px]">
      <Profile />
      <ArticleDetails />
      <AdContainer />
      <Newsletter />
    </aside>
  )
}
