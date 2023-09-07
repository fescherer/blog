import { PushPin, Sparkle } from 'phosphor-react'
import { HiddenItem } from '..'
import { AsidePost, AsidePostIndex } from '@/features/Post/components'
import type { Doc } from 'contentlayer/generated'

interface HiddenItemsProps {
  doc: Doc
}

export function HiddenItems({ doc }: HiddenItemsProps) {
  return (
    <div className="flex flex-col gap-4 rounded px-4 py-6 backdrop-blur">
      <HiddenItem className='md:hidden' articleItem={<AsidePostIndex doc={doc} className='flex h-[70vh] justify-center gap-6 overflow-scroll' />}>
        <PushPin size={24} weight='fill' />
        <span>Find in this article</span>
      </HiddenItem>

      <HiddenItem
          className='lg:hidden'
          articleItem={
            <AsidePost doc={doc} className='flex h-[70vh] justify-center gap-6 overflow-scroll' />
          }
      >
        <Sparkle size={24} weight='fill' />
        <span>Article Details </span>
      </HiddenItem>
    </div>
  )
}
