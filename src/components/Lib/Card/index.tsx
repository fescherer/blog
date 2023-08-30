interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <section className={`rounded bg-foreground p-2 ${className}`}>{children}</section>
  )
}
