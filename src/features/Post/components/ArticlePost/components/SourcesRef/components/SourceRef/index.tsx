'use client'

import Link from 'next/link'
import { getTimeFormated } from '@/utils/functions'

interface SourceRefProps {
  item: string
}

export function SourceRef({ item }: SourceRefProps) {
  const ref = item.split('$')

  if (ref.length > 2) {
    return (
      <p>
        <Link href={ref[2]} target='_blank' className='tracking-wide text-secondary transition-all hover:border-b hover:border-b-primary-hover hover:text-primary-hover'>{`${ref[1]}`}.</Link>
        <span>{' '}Access at {`${getTimeFormated(ref[0])}`}</span>
      </p>
    )
  }
  else { return <></> }
}
