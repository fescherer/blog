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
        <div className='flex gap-2 text-sm'>
          <span className='my-1 rounded-full bg-background px-4 py-1 text-xxs'>React</span>
          <span className='my-1 rounded-full bg-background px-4 py-1 text-xxs'>React</span>
          <span className='my-1 rounded-full bg-background px-4 py-1 text-xxs'>React</span>
          <span className='my-1 rounded-full bg-background px-4 py-1 text-xxs'>React</span>
        </div>
      </div>

      <div>
        <h3>Links:</h3>
        <div className='flex gap-2 text-sm'>
          <span>Deploy</span>
          <span>Figma</span>
          <span>Github</span>
        </div>
      </div>
    </Card>
  )
}
