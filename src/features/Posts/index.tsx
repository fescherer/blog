import { allDocs } from 'contentlayer/generated'

export function Posts() {
  return (
    <div>
      {
        allDocs.map(item => <span className='m-1 bg-foreground p-1 rounded' key={item._id}>{JSON.stringify(item.title)}</span>)
      }
    </div>
  )
}
