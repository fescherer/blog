import path from 'node:path'
import { access, readFile } from 'node:fs/promises'

/**
 * Import an mdx blog post file and return the content
 * @param category
 * @param slug
 * @returns
 */
export async function getPostContent(category: string, slug: string) {
  const POSTS_FOLDER = path.join(process.cwd(), `src/blog/${category}`)
  const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`))

  try {
    await access(filePath)
  } catch (err) {
    return null
  }

  const fileContent = await readFile(filePath, { encoding: 'utf8' })
  return fileContent.replace(/export const metadata = \{(?:[^{}]+|{(?:[^{}]+|{[^{}]+})*})*\}/, '')
}
