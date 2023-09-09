import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import type { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
}

export function Content({ children }: ContentProps) {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content className="z-50 block rounded-md bg-foreground p-2">
        {children}
        <DropdownMenu.Arrow className="fill-foreground" />
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  )
}
