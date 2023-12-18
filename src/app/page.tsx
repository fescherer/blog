import { PostList } from '@/features/PostList'
import { allDocs } from 'contentlayer/generated'

export default function Home() {
  return (
    <PostList posts={allDocs} />
  )
}
