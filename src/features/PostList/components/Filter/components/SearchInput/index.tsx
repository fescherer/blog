'use client'

import type { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useSearchContext } from '@/contexts/search.context'
import { Sliders } from 'phosphor-react'

type SearchInputProps = {
  setIsFilterTrigged: Dispatch<SetStateAction<boolean>>
  selectedTag: string
}

export function SearchInput({ setIsFilterTrigged, selectedTag }: SearchInputProps) {
  const { search, setSearch } = useSearchContext()

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  return (
    <div className="relative">
      <input
        value={search}
        onChange={e => handleSearch(e)}
        type="search"
        className="my-2 w-full rounded border border-bg-foreground bg-bg-background p-2 text-bg-on-background [&:not(:placeholder-shown)]:border-brand-primary"
        placeholder="Search for article..."
      />

      <button onClick={() => setIsFilterTrigged(prev => !prev)} type="button" className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all hover:text-brand-primary ${selectedTag ? 'text-bg-on-background' : 'text-bg-foreground'}`}>
        <Sliders size={18} />
      </button>
    </div>
  )
}
