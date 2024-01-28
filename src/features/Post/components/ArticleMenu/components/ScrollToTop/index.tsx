'use client'

import { ArrowCircleUp } from 'phosphor-react'
import { useScrollBarPercentage } from '@/hooks/useScrollBarPercentage'

export function ScrollToTop() {
  const value = useScrollBarPercentage()

  return (
    <>
      {(value !== 0)
        ? (
          <button aria-label="Scroll to top of page" onClick={() => window.scroll(0, 0)} type="button" className="transition-all hover:text-brand-primary-hover">
            <ArrowCircleUp weight="fill" size={48} />
          </button>
          )
        : null}
    </>
  )
}
