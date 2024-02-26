'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { PropsWithChildren } from 'react'

const LoadingBar = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}

      <ProgressBar
        color="#03a1a1"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}

export default LoadingBar
