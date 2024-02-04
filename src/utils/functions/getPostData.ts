import { notFound } from 'next/navigation'
import { getPostContent } from './getPostContent'
import type { IArticle } from '@/@types/Article'

/**
 * Import an mdx blog post file and return the metadata and content.
 * @param blogType
 * @param blogSlug
 * @returns
 */
export async function getPostData(blogType: string, blogSlug: string): Promise<IArticle> {
  try {
    const file = await import(`@/blog/${blogType}/${blogSlug}.mdx`)
    const postContent = await getPostContent(blogType, blogSlug)

    if (file?.metadata) {
      return {
        ...file.metadata,
        slug: blogSlug,
        category: blogType,
        content: postContent,
      }
    } else {
      throw new Error(`Unable to find metadata in file ${blogSlug}.mdx`)
    }
  } catch (error: any) {
    notFound()
  }
}
