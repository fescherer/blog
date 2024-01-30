import { Link } from '@/components/Lib/Link'

// import { allDocs } from 'contentlayer/generated'
import { PostList } from '@/features/PostList'
import { getPostsData } from '@/utils/functions/getPostsData'

interface PostsByTagProps {
  params: {
    tag: string

  }
}

export default async function PostsByTag({ params: { tag } }: PostsByTagProps) {
  const articles = (await getPostsData()).filter(article => article.tags.includes(tag))

  return (
    <div className="flex w-full flex-col items-baseline">
      <h2 className="text-center text-sm capitalize">
        <Link
          aria-label="Remove filtered by:"
          target="_self"
          href="/"
        >
          Filtered by tag:
          {tag}
        </Link>
      </h2>

      <PostList posts={articles} selectedTag={tag} />
    </div>

  )
}
