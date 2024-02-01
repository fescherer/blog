import { PostList } from '@/features/PostList'
import { getPostsData } from '@/utils/functions/getPostsData'

export default async function Home() {
  const posts = await getPostsData()

  function getLastestPost() {
    let latest = posts[0]
    let latestDate = new Date(posts[0].updated_at)
    posts.forEach((post) => {
      const postDate = new Date(post.updated_at)
      if (postDate.getTime() > latestDate.getTime()) {
        latest = post
        latestDate = postDate
      }
    })

    return latest
  }

  const latestPost = getLastestPost()

  const filteredPosts = posts.filter(post => post.slug !== latestPost.slug)

  return (
    <PostList posts={filteredPosts} latestPost={latestPost} />
  )
}
