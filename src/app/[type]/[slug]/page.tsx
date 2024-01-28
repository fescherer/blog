import { Post } from '@/features/Post'
import { JSONLD } from '@/components/JSONLD'
import { getArticleJSONLD } from '@/components/JSONLD/data/article'
import { ownerConfigs, ownerMetaData } from '@/utils/ownerConfigs'
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
  const data = await getPostData(type, slug)

  return {
    title: data.title,
    alternates: {
      canonical: `${ownerMetaData.url}/${type}/${slug}`,
    },

    openGraph: {
      title: `${data.title} | ${ownerMetaData.title}`,
      description: data.content.slice(0, 90),
      url: `${ownerMetaData.url}/${type}/${slug}`,
      siteName: ownerMetaData.title,
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

    authors: [{ name: ownerConfigs.name, url: ownerMetaData.url }],
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
    'url': `${ownerMetaData.url}/${type}/${slug}`,
    'datePublished': doc.published_date,
    'dateModified': doc.updated_at,
    'image': {
      '@type': 'ImageObject',
      'url': doc.image,
      'width': `${ownerMetaData.image.width}px`,
      'height': `${ownerMetaData.image.height}px`,
    },
    'keywords': doc.tags,
    'description': doc.content.slice(0, 90),
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${ownerMetaData.url}/${type}/${slug}`,
    },
    'author': {
      '@type': 'Person',
      'name': ownerConfigs.name,
    },
    'publisher': {
      '@type': 'Organization',
      'name': ownerMetaData.title,
      'logo': {
        '@type': 'ImageObject',
        'url': '/favicon.svg',
      },
    },
  })
}

export default async function PostPage({ params: { type, slug } }: PageProps) {
  const article = await getPostData(type, slug)
  return (
    <div className="flex w-full max-w-full flex-col">
      {JSONLD(getJSONLD(article, type, slug))}
      <Post article={article} />
    </div>
  )
}
