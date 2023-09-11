'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import type { ReactNode } from 'react'
import { Content } from './components/Content'

interface DropdownProps {
  children: ReactNode
}

export function Dropdown({ children }: DropdownProps) {
  return (
    <DropdownMenu.Root>
      {children}
    </DropdownMenu.Root>
  )
}

Dropdown.Trigger = DropdownMenu.Trigger

Dropdown.Content = Content
