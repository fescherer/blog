import Link from 'next/link'
import { getTimeFormated } from '@/utils/functions'
import type { ISourceReference } from '@/@types/Article'

interface SourceRefProps {
  item: ISourceReference
}

export function SourceRef({ item }: SourceRefProps) {
  const dateTime = getTimeFormated(item.date)

  return (
    <p>
      <Link aria-label={`Link for source ${item.title}`} href={item.link} target="_blank" className="tracking-wide text-brand-primary transition-all hover:border-b hover:border-b-brand-primary-hover hover:text-brand-primary-hover">
        {`${item.title}`}
        .
      </Link>

      <span>
        {' '}
        Access at
        {' '}
        <time dateTime={dateTime}>{dateTime}</time>
      </span>
    </p>
  )
}
