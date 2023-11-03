import type { ReactNode } from 'react'

interface ItemHeaderProps {
  icon: ReactNode
  date: string | number
  title: string
}

export function ItemHeader({ icon, date, title }: ItemHeaderProps) {
  return (
    <div className='flex items-center gap-1'>
      {icon}
      <time dateTime={date.toString()} title={title}>
        {`${title}`}
      </time>
    </div>
  )
}
