import type { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

interface HiddenItemProps {
  children: ReactNode
  className: string
  articleItem: ReactNode
}

export function HiddenItem({ children, className, articleItem }: HiddenItemProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className={`flex items-center gap-2 transition-all hover:text-text-hover ${className}`}>
          {children}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-50 bg-foreground opacity-40 data-[state=open]:animate-overlayShow' />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] backdrop-blur focus:outline-none data-[state=open]:animate-contentShow">

          <Dialog.Close
              className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-text transition-all hover:bg-text-hover focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
          >
            <X />
          </Dialog.Close>

          {articleItem}

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
