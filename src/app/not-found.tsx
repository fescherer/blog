import { Link } from '@/components/Primitives'
import { headers } from 'next/headers'
import Image from 'next/image'

export default async function NotFoundPage() {
  const headersList = headers()
  const url = headersList.get('referer')

  return (
    <div className="relative m-auto">
      <Image width={220} height={220} className="w-full brightness-75" alt="Not found Image" src="/moon-not-found.svg" unoptimized />
      <h2 className="absolute left-[8%] top-1/3 -translate-y-1/3 translate-x-[-8%] font-satoshi text-[64px] text-[#fff] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Not found</h2>

      <div className="absolute left-1/2 -mt-24 flex min-w-[75%] -translate-x-1/2 flex-col bg-bg-background p-4 text-h2">
        <p className="text-center">
          This page does not exist. Please check it out in the wayback machine
          {' '}
          <Link target="_blank" href={`https://web.archive.org/web/*/${url}`}>WaybackMachine</Link>
          .
        </p>

        <p className="mt-4 text-center font-bold">
          Or you can
          {' '}
          <Link href="/">go back to homepage</Link>
          .
        </p>
      </div>
    </div>
  )
}
