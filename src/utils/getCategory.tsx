'use client'

import { Dice6, Laptop, User } from 'lucide-react'

export function getCategoryIcon(type: string) {
  switch (type) {
    case 'coding':
      return <Laptop size={16} />

    case 'personal':
      return <User size={16} />

    default:
      return <Dice6 size={16} />
  }
}
