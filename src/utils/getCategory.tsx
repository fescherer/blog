'use client'

import { Bird, Laptop, User } from 'phosphor-react'

export function getCategoryIcon(type: string) {
  switch (type) {
    case 'coding':
      return <Laptop size={16} />

    case 'personal':
      return <User size={16} />

    default:
      return <Bird size={16} />
  }
}
