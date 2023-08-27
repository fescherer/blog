import clsx from 'clsx'
import { Gear, List, X } from 'phosphor-react'
import { useState } from 'react'

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
          <li>Home</li>
          <li>Blog</li>
          <li>About me</li>
          <li>Projects</li>
          <li><Gear size={20} /></li>
        </ul>
      </nav>

    </div>
  )
}
