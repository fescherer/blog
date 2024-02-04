'use client'

import { useScrollBarPercentage } from '@/hooks/useScrollBarPercentage'
import { ArrowUpCircle } from 'lucide-react'

export function ScrollToTop() {
  const value = useScrollBarPercentage()

  return (
    <>
      {(value !== 0)
        ? (
          <button aria-label="Scroll to top of page" onClick={() => window.scroll(0, 0)} type="button" className="transition-all hover:text-brand-primary-hover">
            <ArrowUpCircle size={40} />
          </button>
          )
        : null}
    </>
  )
}
