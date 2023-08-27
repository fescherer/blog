import Link from 'next/link'
import { mainLink } from '@/utils/config'

export function Copyright() {
  const initialDate = new Date('2023-08-20')
  const today = new Date()

  return (
    <div className='m-auto flex max-w-screen-2xl flex-col items-center'>
      <small>Copyright © 🞄 {`${initialDate.getFullYear().toString()} - ${today.getFullYear().toString()}`}</small>
      <small><Link className='transition-all hover:text-text-hover' href={mainLink} target='_blank'>fescherer | Felipe Scherer</Link></small>
    </div>
  )
}
