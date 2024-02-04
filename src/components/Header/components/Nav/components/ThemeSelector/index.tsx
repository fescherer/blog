'use client'

import { setCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { themes } from '@/themes/themes.theme'
import { Dropdown } from '@/components/Primitives'
import { Separator } from '@/components/Lib'
import { ChevronDown } from 'lucide-react'

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
    <div className="flex items-center gap-1 p-1">
      <button aria-label={`Change current theme ${themes[themeSelected as keyof typeof themes].name} to the next one`} type="button" className="text-brand-primary" onClick={() => changeTheme(themeSelected)}>
        {themes[themeSelected as keyof typeof themes].icon}
      </button>

      <Dropdown>
        <Dropdown.Trigger aria-label="Open menu with more themes to choose"><ChevronDown /></Dropdown.Trigger>

        <Dropdown.Content>
          <ul>
            {allThemes.map((themeItem, index) => (
              <li key={themeItem} className={clsx({ 'text-primary': themeSelected === themeItem })}>
                <button
                  data-theme={themeItem}
                  aria-label={`Change theme to ${themeItem}`}
                  type="button"
                  className={`flex flex-col gap-2 rounded border-2 bg-bg-background p-2 text-xxs capitalize ${themeSelected === themeItem ? 'border-brand-primary' : 'border-transparent'}`}
                  onClick={() => setTheme(themeItem)}
                >
                  <div>
                    <div className="h-2 w-8 bg-brand-primary" />
                  </div>

                  <div className="flex items-baseline gap-1">
                    <div className="flex flex-col gap-2">
                      {[0, 1, 2].map(item => <div key={item} className="h-4 w-6 border" />)}
                    </div>

                    <div className="flex max-w-[56px] flex-wrap gap-2">
                      {[0, 1, 2, 3].map(item => (
                        <div key={item} className="flex w-6 flex-col gap-1">
                          <div className="h-4 w-full rounded-sm bg-bg-foreground" />
                          <div className="h-2 w-full rounded bg-bg-on-background" />
                        </div>
                      ))}
                    </div>
                  </div>
                </button>

                {index % 2 === 0 && <Separator />}
              </li>
            ))}
          </ul>
        </Dropdown.Content>
      </Dropdown>
    </div>
  )
}
