import { Card } from '@/components/Lib/Card'

export function ArticleDetails() {
  return (
    <Card className='flex flex-col gap-2'>
      <h2>Article Details</h2>

      <div>
        <h3>Date:</h3>
        <span className='text-sm'>12 January, 2023</span>
      </div>

      <div>
        <h3>Category</h3>
        <span className='text-sm'>Frontend</span>
      </div>

      <div>
        <h3>Tags:</h3>
        <div className='text-sm flex gap-2'>
          <span className='bg-background py-1 px-4 my-1 rounded-full text-xxs'>React</span>
          <span className='bg-background py-1 px-4 my-1 rounded-full text-xxs'>React</span>
          <span className='bg-background py-1 px-4 my-1 rounded-full text-xxs'>React</span>
          <span className='bg-background py-1 px-4 my-1 rounded-full text-xxs'>React</span>
        </div>
      </div>

      <div>
        <h3>Links:</h3>
        <div className='text-sm flex gap-2'>
          <span>Deploy</span>
          <span>Figma</span>
          <span>Github</span>
        </div>
      </div>
    </Card>
  )
}
