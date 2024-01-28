import { Link } from '@/components/Lib/Link'

// import { allDocs } from 'contentlayer/generated'
import { PostList } from '@/features/PostList'

interface PostsByTagProps {
  params: {
    tag: string

  }
}

export default function PostsByTag({ params: { tag } }: PostsByTagProps) {
  // const docs = allDocs.filter(doc => doc.tags.includes(tag))

  return (
    <div className="flex flex-col items-baseline">
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

      <PostList posts={[]} selectedTag={tag} />
    </div>

  )
}
