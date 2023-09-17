interface CardProps {
  children: React.ReactNode
  className?: string
  title?: string
}

export function Card({ children, className, title }: CardProps) {
  return (
    <section className={`rounded bg-foreground p-2 ${className}`}>
      <h2 className="mb-3">{title}</h2>
      {children}
    </section>
  )
}
