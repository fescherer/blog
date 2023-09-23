import Link from 'next/link'
import { ownerConfigs } from '@/utils/ownerConfigs'

export function Copyright() {
  const initialDate = new Date('2023-08-20')
  const today = new Date()

  return (
    <div className='m-auto flex max-w-screen-2xl flex-col items-center p-4'>
      <small>Copyright © 🞄 {`${initialDate.getFullYear().toString()} - ${today.getFullYear().toString()}`}</small>
      <small><Link aria-label="Go to Github's author page" className='transition-all hover:text-text-hover' href={ownerConfigs.githubLink} target='_blank'>{ownerConfigs.user} | {ownerConfigs.name}</Link></small>
    </div>
  )
}
