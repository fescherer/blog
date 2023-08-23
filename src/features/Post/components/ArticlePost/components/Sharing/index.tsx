'use client'

import { FacebookLogo, LinkedinLogo, Plus, TwitterLogo, WhatsappLogo } from 'phosphor-react'
import { Link } from '@/components/Lib/Link'

export function Sharing() {
  return (
    <div className='flex flex-col gap-2'>
      <h3>Sharing</h3>

      <div className='flex gap-2'>
        <Link href={'gg'}>
          <TwitterLogo size={24} />
        </Link>
        <Link href={'gg'}>
          <WhatsappLogo size={24} />
        </Link>
        <Link href={'gg'}>
          <LinkedinLogo size={24} />
        </Link>
        <Link href={'gg'}>
          <FacebookLogo size={24} />
        </Link>
        <Link href={'ddsad'}>
          <Plus size={20} />
        </Link>
      </div>
    </div>
  )
}
