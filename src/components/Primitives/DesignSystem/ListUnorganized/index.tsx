import type { PropsWithChildren } from 'react'

export function ListUnorganized({ children, ...props }: PropsWithChildren<any>) {
  return (
    <ul className="my-2 ml-6 list-disc" {...props}>{children}</ul>
  )
}
