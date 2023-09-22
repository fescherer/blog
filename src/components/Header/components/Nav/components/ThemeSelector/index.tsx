import clsx from 'clsx'
import { setCookie } from 'cookies-next'
import { useEffect } from 'react'
import { themes } from '@/themes/themes.theme'
import { Dropdown } from '@/components/Primitives'

interface ThemeSelectorProps {
  theme: string
}

export function ThemeSelector({ theme }: ThemeSelectorProps) {
  useEffect(() => {
    if (document.getElementsByTagName('html')[0].getAttribute('data-theme') === '') {
      // This need some attention on the future because causes a flick effect
      if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        changeTheme('dark')
      else if (window.matchMedia('(prefers-color-scheme: light)').matches)
        changeTheme('light')
      else changeTheme('dark')
    }
  }, [])

  function changeTheme(theme: string) {
    setCookie('data-theme', theme)
    document.getElementsByTagName('html')[0].setAttribute('data-theme', theme)
  }

  return (
    <Dropdown>
      <Dropdown.Trigger>Themes</Dropdown.Trigger>

      <Dropdown.Content>
        <ul>
          {
            themes.map(item => (
              <li key={item}>
                <button
                    className={clsx('capitalize', {
                      'text-primary': theme === item,
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
