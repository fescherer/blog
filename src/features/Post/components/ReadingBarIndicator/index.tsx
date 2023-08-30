'use client'

import { useEffect, useState } from 'react'

export function ReadingBarIndicator() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, scrollHeight } = document.documentElement

      const scrollPercent = (scrollTop / (scrollHeight - window.innerHeight)) * 100

      setValue(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={'sticky top-[70px] z-50 h-1 rounded-lg bg-primary opacity-50'} style={{ width: `${value}%` }} />
  )
}
