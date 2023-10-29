import { ArticleCard } from './components'
import type { Doc } from 'contentlayer/generated'

interface PostsProps {
  docs: Doc[]
}

export function Posts({ docs }: PostsProps) {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-h1 font-bold'>Latest Post</p>
      {
         docs.map((item, index) => (
           <div key={item._id}>
             <ArticleCard data={item} />
             {index !== docs.length - 1 && <div className='my-2 h-px w-full rounded-full bg-text opacity-25' />}
           </div>
         ))
      }
    </div>
  )
}

// divide-x divide-solid divide-primary
