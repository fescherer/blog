'use client'

import * as Separator from '@radix-ui/react-separator'
import { LogoIcon } from '@/Icons'

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
        <span>Linkedin</span>
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

      <Separator.Root className="bg-text data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />

      <div className='flex flex-col max-w-screen-2xl m-auto items-center'>
        <span>Copyright C {`${initialDate.getFullYear().toString()} - ${today.getFullYear().toString()}`}</span>
        <span>ofelipescherer | Felipe Scherer</span>
      </div>

    </footer>
  )
}
