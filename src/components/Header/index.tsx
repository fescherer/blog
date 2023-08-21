import { LogoIcon } from '@/Icons'

export function Header() {
  return (
    <header className="flex justify-between max-w-screen-2xl m-auto w-full">

      <LogoIcon color="var(--primary)"/>

      <nav>
        <ul className="flex gap-3">
          <li>Home</li>
          <li>Blog</li>
          <li>About me</li>
          <li>Projects</li>
          <li>Settings</li>
        </ul>
      </nav>
    </header>
  )
}
