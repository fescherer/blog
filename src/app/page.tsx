import type { WebSite } from 'schema-dts'
import { JSONLD } from '@/components/JSONLD'
import { websiteJSONLD } from '@/components/JSONLD/data/website'
import { Posts } from '@/features/Posts'
import { allDocs } from 'contentlayer/generated'
import { AsideAllTagsAndCategories } from '@/components/AsideAllTagsAndCategories'

export default function Home() {
  return (
    <div className='m-auto flex justify-evenly gap-14'>
      {JSONLD<WebSite>(websiteJSONLD)}
      <aside className='hidden flex-col gap-2 lg:flex'>
        <AsideAllTagsAndCategories />
      </aside>
      <Posts docs={allDocs} />
      <aside>
        <div className='h-[600px] w-[300px] bg-foreground' />
      </aside>
    </div>
  )
}
