import { PostCard } from './components'
import type { Doc } from 'contentlayer/generated'

interface PostsProps {
  docs: Doc[]
}

export function Posts({ docs }: PostsProps) {
  return (
    <div className='grid w-full grid-cols-[repeat(auto-fit,minmax(320px,max-content))] justify-center gap-6'>
      {
        docs.map(item => <PostCard key={item._id} data={item} />)
      }
    </div>
  )
}
