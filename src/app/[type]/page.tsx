import type { WebSite } from 'schema-dts'
import { JSONLD } from '@/components/JSONLD'
import { websiteJSONLD } from '@/components/JSONLD/data/website'
import { Link } from '@/components/Lib/Link'
import { Posts } from '@/features/Posts'
import { allDocs } from 'contentlayer/generated'
import { AsideAllTagsAndCategories } from '@/components/AsideAllTagsAndCategories'
import { MobileMenuArticle } from '@/components/MobileMenuArticle'

interface PostsByCategoryProps {
  params: {
    type: string
  }
}

export default function PostsByCategory({ params: { type } }: PostsByCategoryProps) {
  const docs = allDocs.filter(doc => doc.categories.includes(type))

  return (
    <div className='m-auto flex w-full flex-col gap-4'>
      {JSONLD<WebSite>(websiteJSONLD)}

      <Link className='text-center text-sm capitalize' aria-label="Remove filtered by:" target='_self' href="/">
        Filtered by:{type}
      </Link>

      <div className='flex'>
        <aside className='hidden w-72 flex-col gap-2 lg:flex'>
          <AsideAllTagsAndCategories selectedCategory={type} />
        </aside>
        <aside className='block lg:hidden'>
          <MobileMenuArticle>

            <AsideAllTagsAndCategories selectedCategory={type} />

          </MobileMenuArticle>
        </aside>
        <Posts docs={docs} />

      </div>

    </div>

  )
}
