/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { getPostContent } from './getPostContent'
import type { IArticle } from '@/@types/Article'

/**
 * Import an mdx blog post file and return the metadata.
 * @param blogType
 * @param blogSlug
 * @returns
 */
export async function getPostData(blogType: string, blogSlug: string): Promise<IArticle> {
  try {
    const file = await import(`@/blog/${blogType}/${blogSlug}.mdx`)
    const postContent = await getPostContent(blogType, blogSlug)

    if (file?.metadata)
    { return {
      ...file.metadata,
      slug: blogSlug,
      category: blogType,
      content: postContent,
    } }
    else {
      throw new Error(`Unable to find metadata in file ${blogSlug}.mdx`)
    }
  } catch (error: any) {
    return {
      slug: '',
      category: '',
      title: '',
      published_date: '',
      updated_at: '',
      image: '',
      alt: '',
      video_url: '',
      project_url: '',
      figma_url: '',
      github_url: '',
      tags: [],
      author: '',
      sources: [],
      content: '',
    }
  }
}
