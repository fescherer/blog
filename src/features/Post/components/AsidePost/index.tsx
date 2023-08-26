import { AdContainer, ArticleDetails, Newsletter, Profile } from './components'

export function AsidePost() {
  return (
    <aside className="lg:flex flex-col gap-2 sticky top-[1%] h-max min-w-[320px] hidden">
      <Profile />
      <ArticleDetails />
      <AdContainer />
      <Newsletter />
    </aside>
  )
}
