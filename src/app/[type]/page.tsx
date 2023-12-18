import { Link } from '@/components/Lib/Link'
import { allDocs } from 'contentlayer/generated'
import { PostList } from '@/features/PostList'

interface PostsByCategoryProps {
  params: {
    type: string
  }
}

export default function PostsByCategory({ params: { type } }: PostsByCategoryProps) {
  const docs = allDocs.filter(doc => doc.categories.includes(type))

  return (
    <div className='flex flex-col items-baseline'>
      <h2 className='text-center text-sm capitalize'>
        <Link
            aria-label="Remove filtered by:"
            target='_self'
            href="/"
        >Filtered by category: {type}
        </Link>
      </h2>

      <PostList selectedCategory={type} posts={docs} />
    </div>

  )
}
