'use client'

import type { PropsWithChildren } from 'react'
import React from 'react'

interface SearchContextType {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext = React.createContext<SearchContextType>({
  search: '',
  setSearch: () => null,
})

export function SearchProvider({ children }: PropsWithChildren) {
  const [search, setSearch] = React.useState<string>('')

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearchContext() {
  return React.useContext(SearchContext)
}
