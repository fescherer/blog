'use client'

import Link from 'next/link'
import { getTimeFormated } from '@/utils/functions'

interface SourceRefProps {
  item: string
}

export function SourceRef({ item }: SourceRefProps) {
  const ref = item.split('$')
  const dateTime = getTimeFormated(ref[0])

  if (ref.length > 2) {
    return (
      <p>
        <Link aria-label={`Link for source ${ref[1]}`} href={ref[2]} target='_blank' className='tracking-wide text-brand-primary transition-all hover:border-b hover:border-b-brand-primary-hover hover:text-brand-primary-hover'>{`${ref[1]}`}.</Link>
        <span>{' '}Access at <time dateTime={dateTime}>{dateTime}</time></span>
      </p>
    )
  }
  else { return <></> }
}
