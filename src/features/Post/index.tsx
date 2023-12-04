import Image from 'next/image'
import {
  ArticleMenu,
  ArticlePost,
  AsidePost,
  ReadingBarIndicator,
} from './components'
import { ArticleHeader } from './components/ArticlePost/components'
import { MobileMenuArticle } from '@/components/MobileMenuArticle'
import type { Doc } from 'contentlayer/generated'

interface PostProps {
  doc: Doc
}

export function Post({ doc }: PostProps) {
  return (
    <div className='relative'>
      <ReadingBarIndicator />

      <MobileMenuArticle>
        <AsidePost doc={doc} />
      </MobileMenuArticle>

      <div className=' flex flex-col items-center gap-2 p-2 md:flex-row'>
        <div className='m-auto'>
          <Image
              alt=""
              height={568}
              width={853}
              src={doc.image}
              quality={100}
              className='mx-auto max-h-[50vh] rounded-lg border border-background object-contain md:min-h-[30rem] '
          />
        </div>

        <div className='hidden md:block'>
          <ArticleHeader doc={doc} />
        </div>

      </div>

      <div className='relative flex max-w-full gap-2 px-4'>
        <ArticleMenu />
        <ArticlePost doc={doc} />
        <AsidePost doc={doc} className='hidden lg:block' />
      </div>

    </div>
  )
}
