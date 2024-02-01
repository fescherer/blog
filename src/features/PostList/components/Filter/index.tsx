'use client'

import { PropsWithChildren, useState } from 'react'
import { SearchInput } from './components'

type FilterProps = {
  selectedTag: string
}

export function Filter({ children, selectedTag }: PropsWithChildren<FilterProps>) {
  const [isFilterTrigged, setIsFilterTrigged] = useState(!!selectedTag)

  return (
    <div className="flex w-full flex-col">

      <SearchInput
        selectedTag={selectedTag ?? ''}
        setIsFilterTrigged={setIsFilterTrigged}
      />

      {
        isFilterTrigged && <>{children}</>
      }
    </div>
  )
}
