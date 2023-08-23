import Link from 'next/link'
import { footerMainLink } from '@/utils/config'

export function Copyright() {
  const initialDate = new Date('2023-08-20')
  const today = new Date()

  return (
    <div className='flex flex-col max-w-screen-2xl m-auto items-center'>
      <small>Copyright © 🞄 {`${initialDate.getFullYear().toString()} - ${today.getFullYear().toString()}`}</small>
      <small><Link className='hover:text-text-hover transition-all' href={footerMainLink} target='_blank'>fescherer | Felipe Scherer</Link></small>
    </div>
  )
}
