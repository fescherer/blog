'use client'

import { LinkedinLogo } from 'phosphor-react'
import Link from 'next/link'
import { Separator } from '../Lib'
import { LogoIcon } from '@/Icons'
import { footerLinkedinLink } from '@/utils/config'

export function Footer() {
  const initialDate = new Date('2023-08-20')
  const today = new Date()

  return (
    <footer>
      <div className='flex justify-between max-w-screen-2xl m-auto'>

      <div className='flex flex-col gap-2 '>

        <LogoIcon color="var(--primary)"/>

        <p className='max-w-prose text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non risus molestie, tristique purus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non risus molestie, tristique purus </p>

      <div>
        <Link href={footerLinkedinLink}>
        <LinkedinLogo />
        </Link>
        <span>Figma</span>
        <span>Youtube</span>
        <span>Github</span>
        <span>Twitter</span>
        <span>Tiktok</span>
      </div>

      </div>

      <div>
        <span>Projects</span>
        <span>Blog</span>
        <span>About me</span>
      </div>

      </div>

      <Separator />

      <div className='flex flex-col max-w-screen-2xl m-auto items-center'>
        <small>Copyright C {`${initialDate.getFullYear().toString()} - ${today.getFullYear().toString()}`}</small>
        <small>fescherer | Felipe Scherer</small>
      </div>

    </footer>
  )
}
