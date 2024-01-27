'use client'

import { ArticleCard } from './components'
import type { IArticle } from '@/@types/Article'
import { useSearchContext } from '@/contexts/search.context'
import { getArticlesSortedByDate } from '@/utils/functions'

interface PostsProps {
  posts: IArticle[]
}

export function Posts({ posts }: PostsProps) {
  const { search } = useSearchContext()

  const safeFilter = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const rg = new RegExp(`^(?=.*\\b${safeFilter}).*$`, 'gmi')

  const filteredarticles = search
    ? posts.filter(item => item.slug.match(rg)).sort(getArticlesSortedByDate)
    : posts.sort(getArticlesSortedByDate)

  return (
    <div className='mx-2 flex w-full flex-col gap-4'>
      <p className='text-h1 font-bold text-bg-on-background'>Latest Post</p>
      <div className='grid max-w-full grid-cols-1 gap-4 lg:grid-cols-2'>
        {
        filteredarticles.map(item => (
          <ArticleCard key={item.slug} data={item} />
        ))
        }
      </div>
      {
        filteredarticles.length === 0 && (
          <div className='flex w-full flex-col items-center'>
            <span>ᕙ(⇀‸↼‶)ᕗ</span>
            <span>No articles were found</span>
          </div>
        )
      }

    </div>
  )
}
