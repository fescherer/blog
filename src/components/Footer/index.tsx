import Link from 'next/link'
import { Separator } from '../Lib'
import { Copyright, PersonalSkills } from './components'

export function Footer() {
  return (
    <footer>
      <div className='m-auto flex max-w-screen-lg justify-between p-4'>

        <PersonalSkills />
        {/* <SiteMap /> */}

      </div>

      <Separator />

      <div className='flex flex-col gap-2 p-4'>
        <div className='flex justify-center gap-4 text-center text-sm'>
          <Link className='transition-all hover:text-brand-primary-hover' href="/privacy-policy">Privacy Policy</Link>
          <Link className='transition-all hover:text-brand-primary-hover' href="/terms-of-use">Terms of use</Link>
        </div>

        <Copyright />
      </div>
    </footer>
  )
}
