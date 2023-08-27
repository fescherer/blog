'use client'

import { Gear } from 'phosphor-react'
import { Link } from '../Lib/Link'
import { LogoIcon } from '@/Icons'

export function Header() {
  return (
    <header className="m-auto flex w-full max-w-screen-2xl justify-between">

      <Link href="/" target="_self" className="text-primary hover:text-primary-hover">
        <LogoIcon />
      </Link>

      <nav>
        <ul className="flex items-center gap-3">
          <li>Home</li>
          <li>Blog</li>
          <li>About me</li>
          <li>Projects</li>
          <li><Gear size={20} /></li>
        </ul>
      </nav>
    </header>
  )
}
