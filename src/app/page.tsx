import type { WebSite } from 'schema-dts'
import { JSONLD } from '@/components/JSONLD'
import { websiteJSONLD } from '@/components/JSONLD/data/website'
import { Posts } from '@/features/Posts'
import { allDocs } from 'contentlayer/generated'
import { AsideAllTagsAndCategories } from '@/components/AsideAllTagsAndCategories'
import { SearchProvider } from '@/contexts/search.context'

export default function Home() {
  return (
    <SearchProvider>
      <div className='m-auto flex w-full justify-between'>
        {JSONLD<WebSite>(websiteJSONLD)}
        <aside className='hidden w-72 flex-col gap-2 md:flex'>
          <AsideAllTagsAndCategories />
        </aside>
        <Posts docs={allDocs} />
      </div>
    </SearchProvider>
  )
}
