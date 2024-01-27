import { Link } from '@/components/Lib/Link'
import { PostList } from '@/features/PostList'
import { getPostsData } from '@/utils/functions/getPostsData'

interface PostsByCategoryProps {
  params: {
    type: string
  }
}

export default async function PostsByCategory({ params: { type } }: PostsByCategoryProps) {
  const articles = (await getPostsData()).filter(article => article.category === type)

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

      <PostList selectedCategory={type} posts={articles} />
    </div>

  )
}
