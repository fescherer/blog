import type { LinkProps } from 'next/link'
import NextLink from 'next/link'
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type LinkType = LinkProps & AnchorHTMLAttributes<any>

export function Link({ children, className, href, ...props }: PropsWithChildren<LinkType>) {
  return <NextLink className={twMerge('text-brand-primary underline transition-all hover:text-brand-primary-hover', className)} href={href} {...props}>{children}</NextLink>
}
