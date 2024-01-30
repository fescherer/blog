'use client'

import { getCategoryIcon } from '@/utils/getCategory'
import Link from 'next/link'

type CategoryProps = {
  category: string
  selectedCategory: string
}

export function Category({ category, selectedCategory }: CategoryProps) {
  const icon = getCategoryIcon(category)

  return (
    <Link
      className={`flex flex-col items-center capitalize transition-all hover:text-bg-on-background ${category === selectedCategory ? 'text-bg-on-background' : 'text-bg-foreground'}`}
      aria-label={`Remove category filter for ${category}`}
      target="_self"
      href={category === selectedCategory ? '/' : `/${category}`}
    >
      <>{icon}</>
      <span>{category}</span>
    </Link>
  )
}
