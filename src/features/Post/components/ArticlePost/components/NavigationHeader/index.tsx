'use client'

import { FigmaLogo, GithubLogo, Laptop } from 'phosphor-react'
import { Link } from '@/components/Lib/Link'

export function NavigationHeader() {
  return (
    <div className='flex justify-between'>
      <small className='text-xs'>Home - Category - Article</small>

      <div className='flex gap-2'>
        <Link aria-label="Go to project's deploy" href={''}>
          <Laptop size={24} />
        </Link>
        <Link aria-label="Go to Figma's page" href={''}>
          <FigmaLogo size={24} />
        </Link>
        <Link aria-label="Go to source code in Github" href={''}>
          <GithubLogo size={24} />
        </Link>
      </div>
    </div>
  )
}
