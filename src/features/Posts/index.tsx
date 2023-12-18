'use client'

import { ArticleCard } from './components'
import { useSearchContext } from '@/contexts/search.context'
import { getArticlesSortedByDate } from '@/utils/functions'
import type { Doc } from 'contentlayer/generated'

interface PostsProps {
  docs: Doc[]
}

export function Posts({ docs }: PostsProps) {
  const { search } = useSearchContext()

  const safeFilter = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const rg = new RegExp(`^(?=.*\\b${safeFilter}).*$`, 'gmi')

  const filteredDocs = search
    ? docs.filter(item => item.slugAsParams.match(rg)).sort(getArticlesSortedByDate)
    : docs.sort(getArticlesSortedByDate)

  return (
    <div className='mx-2 flex flex-col gap-4 '>
      <p className='text-h1 font-bold text-bg-on-background'>Latest Post</p>
      <div className='grid max-w-full grid-cols-1 gap-4 lg:grid-cols-2'>
        {
        filteredDocs.map(item => (
          <ArticleCard key={item._id} data={item} />
        ))
        }
      </div>
      {
        filteredDocs.length === 0 && (
          <div className='flex flex-col items-center'>
            <span>ᕙ(⇀‸↼‶)ᕗ</span>
            <span>No articles were found</span>
          </div>
        )
      }

    </div>
  )
}
