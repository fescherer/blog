'use client'

import { FacebookLogo, LinkedinLogo, TwitterLogo, WhatsappLogo } from 'phosphor-react'

export function Sharing() {
  return (
    <div className='flex flex-col gap-2'>
      <h2>Sharing</h2>

      <div className='flex gap-2'>
        <TwitterLogo size={24} />
        <WhatsappLogo size={24} />
        <LinkedinLogo size={24} />
        <FacebookLogo size={24} />
      </div>
    </div>
  )
}
