import type { LinkProps } from 'next/link'
import NextLink from 'next/link'
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'

type LinkType = LinkProps & AnchorHTMLAttributes<any>

export function Link({ children, href, ...props }: PropsWithChildren<LinkType>) {
  return <NextLink className='text-primary underline transition-all hover:text-primary-hover' href={href} {...props}>{children}</NextLink>
}
