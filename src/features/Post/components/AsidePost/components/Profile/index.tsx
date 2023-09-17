import { Card } from '@/components/Lib/Card'
import { authors } from '@/utils/authors'

interface ProfileProps {
  author: string
}

export function Profile({ author }: ProfileProps) {
  const authorData = authors[author as keyof typeof authors]

  if (!authorData)
    return <></>

  return (
    <Card title="Author">
      <div className='flex gap-2'>
        <picture>
          <img src={authorData.image} alt="" className='w-64 rounded-md bg-background' />
        </picture>

        <div>
          <h2 className='whitespace-nowrap'>{authorData.fullName}</h2>
          <small className='text-xxs'>{`${authorData.profession}`}</small>

          <p className='text-justify text-xs'>{authorData.description}</p>
        </div>
      </div>
    </Card>
  )
}
