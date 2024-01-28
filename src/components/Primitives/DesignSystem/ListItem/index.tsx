import type { PropsWithChildren } from 'react'

export function ListItem({ children, ...props }: PropsWithChildren<any>) {
  return (
    <li className="text-base" {...props}>{children}</li>
  )
}
