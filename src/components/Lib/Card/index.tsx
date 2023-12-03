interface CardProps {
  children: React.ReactNode
  className?: string
  title?: string
}

export function Card({ children, className, title }: CardProps) {
  return (
    <section className={`rounded bg-background-card p-2 shadow-md ${className}`}>
      <h2 className="mb-3 text-title">{title}</h2>
      {children}
    </section>
  )
}
