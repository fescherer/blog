'use client'

import { useScrollBarPercentage } from '@/hooks/useScrollBarPercentage'

export function ReadingBarIndicator() {
  const value = useScrollBarPercentage()

  return (
    <div className="sticky top-[70px] z-50 h-1 rounded-lg bg-brand-primary opacity-50" style={{ width: `${value}%` }} />
  )
}
