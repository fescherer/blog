import { AsideAllTagsAndCategories } from '@/components/AsideAllTagsAndCategories'
import { Posts } from '@/features/Posts'
import { allDocs } from 'contentlayer/generated'

export default function Home() {
  return (
    <>
      <Posts docs={allDocs} />
      <aside className='hidden flex-col gap-2 lg:flex'>
        <AsideAllTagsAndCategories />
      </aside>
    </>
  )
}
