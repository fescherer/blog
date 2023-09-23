'use client'

import clsx from 'clsx'
import { List, X } from 'phosphor-react'
import { useState } from 'react'
import { ThemeSelector } from './components'
import { Link } from '@/components/Lib/Link'

interface NavProps {
  theme: string
}

export function Nav({ theme }: NavProps) {
  const [isMenuHidden, setIsMenuHidden] = useState(true)

  return (
    <div className='my-auto flex flex-col items-end gap-2'>

      <button aria-label={isMenuHidden ? 'Open menu' : 'Close menu'} className='transition-all hover:text-text-hover md:hidden' type='button' onClick={() => setIsMenuHidden(prev => !prev)}>
        {isMenuHidden ? <List size={24} /> : <X size={24} />}
      </button>

      <nav className={clsx('md:block', {
        hidden: isMenuHidden,
      })}
      >
        <ul className="flex flex-col items-center gap-3 md:flex-row">
          <li><Link aria-label="Go to home" href="/" target='_self'>Home</Link></li>
          <li><Link aria-label="Go to author's portifolio" href="https://felipescherer.com" target='_self'>Portifolio</Link></li>
          <li><ThemeSelector theme={theme} /></li>
          {/* <li><Gear size={20} /></li> */}
        </ul>
      </nav>

    </div>
  )
}
