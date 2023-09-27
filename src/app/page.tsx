import type { WebSite } from 'schema-dts'
import { AsideAllTagsAndCategories } from '@/components/AsideAllTagsAndCategories'
import { JSONLD } from '@/components/JSONLD'
import { websiteJSONLD } from '@/components/JSONLD/data/website'
import { Posts } from '@/features/Posts'
import { allDocs } from 'contentlayer/generated'

export default function Home() {
  return (
    <>
      {JSONLD<WebSite>(websiteJSONLD)}
      <Posts docs={allDocs} />
      <aside className='hidden flex-col gap-2 lg:flex'>
        <AsideAllTagsAndCategories />
      </aside>

    </>
  )
}
