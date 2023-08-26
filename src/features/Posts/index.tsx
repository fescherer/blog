import { PostCard } from './components'
import { allDocs } from 'contentlayer/generated'

export function Posts() {
  return (
    <div className='flex gap-2 flex-wrap'>
      {
        allDocs.map(item => <PostCard key={item._id} data={item} />)
      }
    </div>
  )
}
