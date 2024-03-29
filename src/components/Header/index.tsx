import { cookies } from 'next/headers'
import { Link } from '../Lib/Link'
import { Nav } from './components'
import { LogoIcon } from '@/Icons'

export function Header() {
  const theme = cookies().get('data-theme')

  return (
    <header className="fixed left-1/2 flex w-full max-w-screen-lg -translate-x-1/2 justify-between p-4 backdrop-blur">

      <Link aria-label="Go to home page" href="/" target="_self" className="text-brand-primary hover:text-brand-primary-hover">
        <LogoIcon />
      </Link>

      <Nav theme={theme?.value ?? 'dark'} />

    </header>
  )
}
