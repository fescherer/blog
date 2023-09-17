import clsx from 'clsx'
import { setCookie } from 'cookies-next'
import { themes } from '@/themes/themes.theme'
import { Dropdown } from '@/components/Primitives'

interface ThemeSelectorProps {
  theme: string
}

export function ThemeSelector({ theme }: ThemeSelectorProps) {
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
