import { Separator } from '../Lib'
import { Copyright, PersonalSkills } from './components'

export function Footer() {
  return (
    <footer>
      <div className='m-auto flex max-w-screen-2xl justify-between p-4'>

        <PersonalSkills />
        {/* <SiteMap /> */}

      </div>

      <Separator />
      <Copyright />
    </footer>
  )
}
