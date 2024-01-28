import type { PropsWithChildren } from 'react'

export function Text({ children, ...props }: PropsWithChildren<any>) {
  return (
    <p className="my-2" {...props}>
      {children}
    </p>
  )
}
