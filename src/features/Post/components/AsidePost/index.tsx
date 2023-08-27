import { AdContainer, ArticleDetails, Newsletter, Profile } from './components'

export function AsidePost() {
  return (
    <aside className="sticky top-[1%] hidden h-max min-w-[320px] flex-col gap-2 lg:flex">
      <Profile />
      <ArticleDetails />
      <AdContainer />
      <Newsletter />
    </aside>
  )
}
