'use client'

import { Gear } from 'phosphor-react'
import { LogoIcon } from '@/Icons'

export function Header() {
  return (
    <header className="flex justify-between max-w-screen-2xl m-auto w-full">

      <LogoIcon color="var(--primary)" />

      <nav>
        <ul className="flex gap-3 items-center">
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
