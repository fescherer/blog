import { Post } from '@/features/Post'
import { JSONLD } from '@/components/JSONLD'
import { getArticleJSONLD } from '@/components/JSONLD/data/article'
import { ownerMetaData } from '@/utils/ownerConfigs'
import { getPostNames } from '@/utils/functions/getPostsName'
import { getPostData } from '@/utils/functions/getPostData'
import type { IArticle } from '@/@types/Article'

interface PageProps {
  params: {
    type: string
    slug: string
  }
}

export async function generateMetadata(
  { params: { slug, type } }: PageProps,
) {
  const data = await getPostData(slug, type)

  return {
    title: data.title,
    alternates: {
      canonical: `https://blog.felipescherer.com/${type}/${slug}`,
    },

    openGraph: {
      title: `${data.title} | Felipe Scherer\'s Blog`,
      description: 'data.body.raw.slice(0, 90)', // TODO solve this
      url: `https://blog.felipescherer.com/${type}/${slug}`,
      siteName: 'Felipe Scherer\'s blog',
      images: [
        {
          url: data.image,
          alt: data.alt,
          width: 1300,
          height: 630,
        },
      ],
      locale: 'en',
      type: 'article',
    },

    authors: [
      { name: 'Felipe Scherer', url: 'https://github.com/fescherer.com' },
    ],
  }
}

/**
 * return all possible blogId values in an array like [{blogId: 'first_blog'}, {blogId: 'second_blog'}]
 */
export function generateStaticParams() {
  const blogPosts = getPostNames()
  return blogPosts.map(post => ({
    blogId: post,
  }))
}

function getJSONLD(doc: IArticle, type: string, slug: string) {
  return getArticleJSONLD({
    '@type': 'Article',
    'headline': doc.title,
    'url': `https://blog.felipescherer.com/${type}/${slug}`,
    'datePublished': doc.published_date,
    'dateModified': doc.published_date,
    'image': {
      '@type': 'ImageObject',
      'url': doc.image,
      'width': `${ownerMetaData.image.width}px`,
      'height': `${ownerMetaData.image.height}px`,
    },
    'keywords': doc.tags,
    'description': 'doc.body.raw.slice(0, 90)', // TODO solve this
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://blog.felipescherer.com',
    },
  })
}

export default async function PostPage({ params: { type, slug } }: PageProps) {
  const article = await getPostData(type, slug)
  return (
    <div className='flex w-full max-w-full flex-col'>
      {JSONLD(getJSONLD(article, type, slug))}
      <Post article={article} />
    </div>
  )
}
