interface CardProps {
  children: React.ReactNode
}

export function Card({ children }: CardProps) {
  return (
    <section className="bg-foreground p-2">{children}</section>
  )
}
