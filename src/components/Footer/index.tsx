import { Separator } from '../Lib'
import { Copyright, PersonalSkills, SiteMap } from './components'

export function Footer() {
  return (
    <footer>
      <div className='m-auto flex max-w-screen-2xl justify-between'>

        <PersonalSkills />
        <SiteMap />

      </div>

      <Separator />
      <Copyright />
    </footer>
  )
}
