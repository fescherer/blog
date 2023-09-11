'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { themes } from '@/themes/themes.theme'
import { Dropdown } from '@/components/Primitives'

export function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState('')

  function changeTheme(theme: string) {
    document.getElementsByTagName('html')[0].setAttribute('data-theme', theme)
    setCurrentTheme(theme)

    const colors = themes[theme as keyof typeof themes]

    for (const [property, value] of Object.entries(colors))
      document.documentElement.style.setProperty(property, value)
  }

  useEffect(() => {
    setCurrentTheme(document.getElementsByTagName('html')[0].getAttribute('data-theme') ?? '')
  }, [])

  return (
    <Dropdown>
      <Dropdown.Trigger>Themes</Dropdown.Trigger>

      <Dropdown.Content>
        <ul>
          {
            Object.keys(themes).map(item => (
              <li key={item}>
                <button
                    className={clsx('capitalize', {
                      'text-primary': currentTheme === item,
                    })}
                    onClick={() => changeTheme(item)}
                    type='button'
                >{item.replace('-', ' ')}
                </button>
              </li>
            ))
          }
        </ul>
      </Dropdown.Content>
    </Dropdown>
  )
}
