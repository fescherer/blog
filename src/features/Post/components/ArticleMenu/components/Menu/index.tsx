import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Article } from 'phosphor-react'
import { HiddenItems } from './components'
import type { Doc } from 'contentlayer/generated'

interface MenuProps {
  doc: Doc
}

export function Menu({ doc }: MenuProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button" className='block transition-all hover:text-primary-hover lg:hidden'>
          <Article weight='fill' size={48} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>

        <DropdownMenu.Content>
          <HiddenItems doc={doc} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
