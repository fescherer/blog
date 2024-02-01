import type { WebSite } from 'schema-dts'
import { SearchProvider } from '@/contexts/search.context'
import { JSONLD } from '@/components/JSONLD'
import { websiteJSONLD } from '@/components/JSONLD/data/website'
import { Posts } from '@/features/Posts'
import type { IArticle } from '@/@types/Article'
import { CategoriesFilter, Filter, LatestPost } from './components'
import { TagsFilter } from './components/TagsFilter'

interface PostlistProps {
  posts: IArticle[]
  selectedTag?: string
  selectedCategory?: string
  latestPost?: IArticle | null | undefined
}

export function PostList({ posts, selectedTag, selectedCategory, latestPost }: PostlistProps) {
  return (
    <SearchProvider>
      <div className="m-auto flex w-full flex-col gap-4 p-2">
        {JSONLD<WebSite>(websiteJSONLD)}

        {
          !selectedCategory && !selectedTag && latestPost && <LatestPost article={latestPost} />
        }

        <div className="flex w-full flex-col">

          <CategoriesFilter selectedCategory={selectedCategory ?? ''} />

          <Filter selectedTag={selectedTag ?? ''}>
            <TagsFilter selectedTag={selectedTag ?? ''} />
          </Filter>
        </div>

        <Posts posts={posts} />
      </div>
    </SearchProvider>
  )
}
