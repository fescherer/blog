'use client'

import * as Popover from '@radix-ui/react-popover'
import { useEffect, useState } from 'react'
import { ownerConfigs } from '@/utils/ownerConfigs'

export function CookieMessage() {
  const [showCookies, setShowCookies] = useState(true)

  function setCookies(value: boolean) {
    setShowCookies(value)
    window.localStorage.setItem(
      `${ownerConfigs.appName}:showCookieMessage`,
      `${value}`,
    )
  }

  useEffect(() => {
    const showCookieMessage = window.localStorage.getItem(`${ownerConfigs.appName}:showCookieMessage`)

    if (showCookieMessage !== null) {
      try {
        const parsed = JSON.parse(showCookieMessage) as boolean
        setShowCookies(parsed)
      }
      catch (e) {
        setCookies(true)
      }
    }
    else { setCookies(false) }
  }, [])

  const saveCookies = () =>
    setCookies(false)

  return (
    <div className='fixed bottom-3 left-3 w-[250px]'>
      <Popover.Root open={showCookies}>
        <Popover.Anchor />
        <Popover.Portal>
          <Popover.Content className='flex max-w-[250px] cursor-pointer flex-col items-center gap-3 rounded border border-primary p-5 backdrop-blur hover:text-text-hover' onClick={saveCookies}>
            <h2 className='text-sm'>
              🍪 We use cookies 🍪
            </h2>
            <p className='text-justify text-base'>
              To improve your experience using this product, cookies and other similar technologies are used. By using our products you agree to the use of cookies and other similar technologies.
            </p>
            <button aria-label="Accept cookies and other tecnologies" type="button" className='rounded bg-primary px-4 py-2 text-base text-text-on-primary hover:bg-primary-hover'>Ok. Thank you</button>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
}
