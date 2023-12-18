import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import type { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
}

export function Content({ children }: ContentProps) {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content className="z-50 block rounded-md border border-bg-foreground bg-bg-background p-2">
        {children}
        <DropdownMenu.Arrow className="fill-bg-foreground" />
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  )
}
