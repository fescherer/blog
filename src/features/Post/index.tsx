import { ArticlePost, AsidePost } from './components'

export function Post() {
  return (
    <div className="flex gap-2 relative">
      <ArticlePost />
      <AsidePost />
    </div>
  )
}
