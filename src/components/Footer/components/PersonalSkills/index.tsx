'use client'

import Link from 'next/link'
import { LinkedinLogo } from 'phosphor-react'
import { LogoIcon } from '@/Icons'
import { footerLinkedinLink } from '@/utils/config'

export function PersonalSkills() {
  return (
    <div className='flex flex-col gap-2 '>

      <LogoIcon color="var(--primary)" />

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
  )
}
