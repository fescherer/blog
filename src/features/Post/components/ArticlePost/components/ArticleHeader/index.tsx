'use client'

import { FigmaLogo, GithubLogo, Laptop } from 'phosphor-react'
import { Link } from '@/components/Lib/Link'

export function ArticleHeader() {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <h1 className='text-h1 font-gambarino'>Article Name</h1>
        <div className='text-sm'>
          <small>21, January 2023</small>
          <small>{' 🞄 '}</small>
          <small>14 minutes</small>
        </div>
      </div>

      <div className='flex gap-2'>
        <Link href={''}>
          <Laptop size={24} />
        </Link>
        <Link href={''}>
          <FigmaLogo size={24} />
        </Link>
        <Link href={''}>
          <GithubLogo size={24} />
        </Link>
      </div>
    </div>
  )
}
