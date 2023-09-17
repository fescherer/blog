import { AsideAllTagsAndCategories } from '@/components/AsideAllTagsAndCategories'
import { Link } from '@/components/Lib/Link'
import { Posts } from '@/features/Posts'
import { allDocs } from 'contentlayer/generated'

interface PostsByCategoryProps {
  params: {
    category: string

  }
}

export default function PostsByCategory({ params: { category } }: PostsByCategoryProps) {
  const docs = allDocs.filter(doc => doc.categories.includes(category))

  return (
    <>
      <div className='m-auto flex w-full flex-col gap-4'>
        <h2 className='text-center text-sm capitalize'><Link target='_self' href="/">Filtered by:{category}</Link></h2>
        <Posts docs={docs} />
      </div>
      <aside className='hidden flex-col gap-2 lg:flex'>
        <AsideAllTagsAndCategories selectedCategory={category} />
      </aside>
    </>

  )
}
