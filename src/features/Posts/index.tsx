import { PostCard } from './components'
import { allDocs } from 'contentlayer/generated'

export function Posts() {
  return (

  // <div className='grid'>
    // <div className='flex justify-center'>
    //         <div className='flex flex-wrap gap-2'>
    <div className='grid w-full grid-flow-row grid-cols-4 justify-between justify-items-center gap-5'>
      {
        allDocs.map(item => <PostCard key={item._id} data={item} />)
        }
    </div>
    //   </div>
    // </div>

  )
}
