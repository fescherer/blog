import { Card } from '@/components/Lib/Card'

export function Profile() {
  return (
    <Card className='flex gap-2'>
      <picture>
        <img src="" alt="" />
        <div className='w-24 h-36 bg-background rounded-md' />
      </picture>

      <div>
        <h2>Felipe Scherer</h2>
        <small className='text-xxs'>Software Engenering - Author</small>

        <p className='text-justify text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus repudiandae ut modi repellat error nulla reiciendis, mollitia </p>
      </div>
    </Card>
  )
}
