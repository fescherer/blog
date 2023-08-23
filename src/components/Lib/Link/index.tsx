import LinkNext from 'next/link'

interface LinkProps {
  href: string
  target?: '_blank' | '_parent' | '_self' | '_top'
  children: React.ReactNode
}

export function Link({ children, href, target = '_blank', ...props }: LinkProps) {
  return (
    <LinkNext className='hover:text-text-hover transition-all' href={href} target={target} {...props}>
      {children}
    </LinkNext>
  )
}
