'use client'

import type { ChangeEvent } from 'react'
import { useSearchContext } from '@/contexts/search.context'

export function SearchInput() {
  const { search, setSearch } = useSearchContext()

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  return (
  // <Card title='Search for article'>
    <input
      value={search}
      onChange={e => handleSearch(e)}
      type="search"
      className="w-full rounded border border-bg-foreground bg-bg-background p-2 text-bg-on-background [&:not(:placeholder-shown)]:border-brand-primary"
      placeholder="Search for article..."
    />
  // </Card>
  )
}
