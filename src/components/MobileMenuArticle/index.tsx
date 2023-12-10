'use client'

import clsx from 'clsx'
import { CaretLeft, CaretRight } from 'phosphor-react'
import type { ReactNode } from 'react'
import { useState } from 'react'

interface MobileMenuArticleProps {
  children: ReactNode
}

export function MobileMenuArticle({ children }: MobileMenuArticleProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='fixed right-0 top-[70px]  z-50  block h-full lg:hidden'>
      {
        isOpen
          ? (
            <>
              <div className="absolute right-0  z-50 flex h-[calc(100vh-70px)] max-w-[18rem] flex-col overflow-scroll bg-bg-background px-2 pb-10 pt-2">
                {children}
              </div>
              <button aria-label="Overlay to cancel menu" type="button" onClick={() => setIsOpen(prev => !prev)} className='h-full w-screen bg-bg-foreground opacity-50' />
            </>
            )
          : null
      }
      <button type='button' aria-label="Open menu" onClick={() => setIsOpen(prev => !prev)} className='h-full w-2 bg-brand-primary' />
      <button
          onClick={() => setIsOpen(prev => !prev)}
          className={clsx('absolute top-1/2 -translate-y-1/2 rounded bg-brand-primary py-2 text-brand-on-primary', {
            '-left-3': !isOpen,
          })}
          aria-label="Close menu"
          type='button'
      >
        {
          isOpen ? <CaretRight size={24} weight='bold' /> : <CaretLeft size={24} weight='bold' />
        }
      </button>

    </div>
  )
}
