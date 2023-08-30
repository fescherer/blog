import { PostCard } from './components'
import { allDocs } from 'contentlayer/generated'

export function Posts() {
  return (
    <div className='grid w-full grid-cols-[repeat(auto-fit,minmax(320px,max-content))] justify-center gap-6'>
      {
        allDocs.map(item => <PostCard key={item._id} data={item} />)
        }
    </div>
  )
}
