'use client'

import { FigmaLogo, GithubLogo, Laptop } from 'phosphor-react'

export function ArticleHeader() {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <h2>Article Name</h2>
        <div>
          <small>21, January 2023</small>
          <small>14 minutes</small>
        </div>
      </div>

      <div className='flex gap-2'>
        <Laptop size={32} />
        <FigmaLogo size={32} />
        <GithubLogo size={32} />
      </div>
    </div>
  )
}
