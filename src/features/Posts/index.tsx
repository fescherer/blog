import { PostCard } from './components'
import { allDocs } from 'contentlayer/generated'

export function Posts() {
  return (
    <div className='flex flex-wrap gap-2'>
      {
        allDocs.map(item => <PostCard key={item._id} data={item} />)
      }
    </div>
  )
}
