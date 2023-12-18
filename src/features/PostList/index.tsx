import type { WebSite } from 'schema-dts'
import { SearchProvider } from '@/contexts/search.context'
import { JSONLD } from '@/components/JSONLD'
import { websiteJSONLD } from '@/components/JSONLD/data/website'
import { Posts } from '@/features/Posts'
import type { Doc } from 'contentlayer/generated'
import { AsideAllTagsAndCategories } from '@/components/AsideAllTagsAndCategories'
import { SearchInput } from '@/components/Primitives/SearchInput'

interface PostlistProps {
  posts: Doc[]
  selectedTag?: string
  selectedCategory?: string
}

export function PostList({ posts, selectedTag, selectedCategory }: PostlistProps) {
  return (
    <SearchProvider>
      <div className='m-auto flex w-full flex-col-reverse justify-between lg:flex-row'>
        {JSONLD<WebSite>(websiteJSONLD)}
        <aside className='m-1 flex flex-col gap-2 lg:min-w-[16rem]'>
          <div className='hidden lg:flex'>
            <SearchInput />
          </div>
          <AsideAllTagsAndCategories selectedTag={selectedTag} selectedCategory={selectedCategory} />
        </aside>
        <Posts docs={posts} />

        <div className='m-2 flex lg:hidden'>
          <SearchInput />
        </div>
      </div>
    </SearchProvider>
  )
}
