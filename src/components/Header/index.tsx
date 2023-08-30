'use client'

import { Link } from '../Lib/Link'
import { Nav } from './components'
import { LogoIcon } from '@/Icons'

export function Header() {
  return (
    <header className="fixed left-1/2 z-50 flex w-full max-w-screen-2xl -translate-x-1/2 justify-between p-4 backdrop-blur">

      <Link href="/" target="_self" className="text-primary hover:text-primary-hover">
        <LogoIcon />
      </Link>

      <Nav />

    </header>
  )
}
