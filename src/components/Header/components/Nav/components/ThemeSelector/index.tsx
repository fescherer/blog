'use client'

import { setCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import { CaretDown } from 'phosphor-react'
import clsx from 'clsx'
import { Dropdown } from '@/components/Primitives'
import { themes } from '@/themes/themes.theme'

interface ThemeSelectorProps {
  theme: string
}

export function ThemeSelector({ theme }: ThemeSelectorProps) {
  const [themeSelected, setThemeSelected] = useState(theme)
  const allThemes = Object.keys(themes)

  useEffect(() => {
    if (document.getElementsByTagName('html')[0].getAttribute('data-theme') === '') {
      // This need some attention on the future because causes a flick effect
      if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        setTheme('dark')
      else if (window.matchMedia('(prefers-color-scheme: light)').matches)
        setTheme('light')
      else setTheme('dark')
    }
  }, [])

  function setTheme(theme: string) {
    setThemeSelected(theme)
    setCookie('data-theme', theme)
    document.getElementsByTagName('html')[0].setAttribute('data-theme', theme)
  }

  function changeTheme(theme: string) {
    const indexTheme = allThemes.findIndex((item => theme === item))

    if (indexTheme < allThemes.length - 1)
      setTheme(allThemes[indexTheme + 1])
    else setTheme(allThemes[0])
  }

  return (
    <div className='flex items-center gap-1'>
      <button aria-label={`Change current theme ${themes[themeSelected as keyof typeof themes].name} to the next one`} type="button" className='text-primary' onClick={() => changeTheme(themeSelected)}>
        {themes[themeSelected as keyof typeof themes].icon}
      </button>

      <Dropdown>
        <Dropdown.Trigger aria-label="Open menu with more themes to choose"><CaretDown /></Dropdown.Trigger>
        <Dropdown.Content>
          <ul>
            {allThemes.map(themeItem => (
              <li key={themeItem} className={clsx({ 'text-primary': themeSelected === themeItem })}>
                <button aria-label={`Change theme to ${themeItem}`} type='button' className='capitalize' onClick={() => setTheme(themeItem)}>
                  {themeItem}
                </button>
              </li>
            ))}
          </ul>
        </Dropdown.Content>
      </Dropdown>
    </div>
  )
}
