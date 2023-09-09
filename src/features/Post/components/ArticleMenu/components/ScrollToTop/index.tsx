'use client'

import { ArrowCircleUp } from 'phosphor-react'
import { useScrollBarPercentage } from '@/hooks/useScrollBarPercentage'

export function ScrollToTop() {
  const value = useScrollBarPercentage()

  return (
    <>
      {(value !== 0)
        ? (
          <button onClick={() => window.scroll(0, 0)} type="button" className='transition-all hover:text-primary-hover'>
            <ArrowCircleUp weight='fill' size={48} />
          </button>
          )
        : null
    }
    </>
  )
}
