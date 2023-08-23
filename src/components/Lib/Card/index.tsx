interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <section className={`bg-foreground p-2 ${className}`}>{children}</section>
  )
}
