import { Separator } from '../Lib'
import { Copyright, PersonalSkills, SiteMap } from './components'

export function Footer() {
  return (
    <footer>
      <div className='flex justify-between max-w-screen-2xl m-auto'>

        <PersonalSkills />
        <SiteMap />

      </div>

      <Separator />
      <Copyright />
    </footer>
  )
}
