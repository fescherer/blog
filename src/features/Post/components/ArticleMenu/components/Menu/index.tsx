'use client'

import { Article } from 'phosphor-react'
import { HiddenItems } from './components'
import { Dropdown } from '@/components/Primitives'
import type { Doc } from 'contentlayer/generated'

interface MenuProps {
  doc: Doc
}

export function Menu({ doc }: MenuProps) {
  return (
    <Dropdown>
      <Dropdown.Trigger className='block transition-all hover:text-primary-hover lg:hidden'>
        <Article weight='fill' size={48} />

      </Dropdown.Trigger>

      <Dropdown.Content>
        <HiddenItems doc={doc} />
      </Dropdown.Content>
    </Dropdown>
  )
}
