import { PostList } from '@/features/PostList'
import { getPostsData } from '@/utils/functions/getPostsData'

export default async function Home() {
  const posts = await getPostsData()

  return (
    <PostList posts={posts} />
  )
}
