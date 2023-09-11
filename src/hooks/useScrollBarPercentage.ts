import { useEffect, useState } from 'react'

export function useScrollBarPercentage() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, scrollHeight } = document.documentElement

      const scrollPercent = (scrollTop / (scrollHeight - window.innerHeight)) * 100

      setValue(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
  }, [])

  return value
}
