import clsx from 'clsx'
import { List, X } from 'phosphor-react'
import { useState } from 'react'
import { Link } from '@/components/Lib/Link'

export function Nav() {
  const [isMenuHidden, setIsMenuHidden] = useState(true)

  return (
    <div className='my-auto flex flex-col items-end gap-2'>

      <button className='transition-all hover:text-text-hover md:hidden' type='button' onClick={() => setIsMenuHidden(prev => !prev)}>
        {isMenuHidden ? <List size={24} /> : <X size={24} />}
      </button>

      <nav className={clsx('md:block', {
        hidden: isMenuHidden,
      })}
      >
        <ul className="flex flex-col items-center gap-3 md:flex-row">
          <li><Link href="/" target='_self'>Home</Link></li>
          <li><Link href="https://felipescherer.com" target='_self'>Portifolio</Link></li>
          {/* <li><Gear size={20} /></li> */}
        </ul>
      </nav>

    </div>
  )
}
