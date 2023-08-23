import LinkNext from 'next/link'

interface LinkProps {
  href: string
  target?: '_blank' | '_parent' | '_self' | '_top'
  children: React.ReactNode
  className?: string
}

export function Link({ children, href, target = '_blank', className, ...props }: LinkProps) {
  return (
    <LinkNext className={`hover:text-text-hover transition-all ${className}`} href={href} target={target} {...props}>
      {children}
    </LinkNext>
  )
}
