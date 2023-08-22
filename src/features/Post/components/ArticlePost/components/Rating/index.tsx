'use client'

import { Star } from 'phosphor-react'

export function Rating() {
  return (
    <div className='flex flex-col gap-2'>
      <h3>Rating</h3>
      <div className='flex gap-2'>
        <Star size={20} />
        <Star size={20} />
        <Star size={20} />
        <Star size={20} />
        <Star size={20} />
      </div>
    </div>
  )
}
