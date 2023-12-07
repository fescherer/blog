import { twMerge } from 'tailwind-merge'

interface CardProps {
  children: React.ReactNode
  className?: string
  title?: string
}

export function Card({ children, className, title }: CardProps) {
  return (
    <section className={twMerge('relative my-3 box-border rounded-sm border border-background-card px-2 py-4', className)}>
      <h2 className="absolute -top-4 bg-background px-2">{title}</h2>
      {children}
    </section>
  )
}
