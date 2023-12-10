import type { WebSite } from 'schema-dts'
import { JSONLD } from '@/components/JSONLD'
import { websiteJSONLD } from '@/components/JSONLD/data/website'
import { Posts } from '@/features/Posts'
import { allDocs } from 'contentlayer/generated'
import { AsideAllTagsAndCategories } from '@/components/AsideAllTagsAndCategories'
import { SearchProvider } from '@/contexts/search.context'
import { SearchInput } from '@/components/Primitives/SearchInput'

export default function Home() {
  return (
    <SearchProvider>
      <div className='m-auto flex w-full flex-col-reverse justify-between lg:flex-row'>
        {JSONLD<WebSite>(websiteJSONLD)}
        <aside className='m-1 flex flex-col gap-2 lg:w-72'>
          <div className='hidden lg:block'>
            <SearchInput />
          </div>
          <AsideAllTagsAndCategories />
        </aside>
        <Posts docs={allDocs} />
      </div>
    </SearchProvider>
  )
}
