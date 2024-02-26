'use client'

import { useScrollBarPercentage } from '@/hooks/useScrollBarPercentage'

export function ReadingBarIndicator() {
  const value = useScrollBarPercentage()

  return (
    <div className="sticky top-[70px] z-50 h-1 rounded-lg bg-bg-on-background opacity-20" style={{ width: `${value}%` }} />
  )
}
