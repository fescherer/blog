import { readdirSync } from 'node:fs'

/**
 * Scan the blog directory and return an array of file names inside each category
 * @returns
 */
export function getPostNames(): { type: string, slug: string }[] {
  try {
    // Read the /blog folder at root dir
    const typesListFolder: string[] = readdirSync('./src/blog/')
    // Return an array of filenames at this dir
    let articlesNames: { type: string, slug: string }[] = []
    if (typesListFolder.length > 0) {
      typesListFolder.forEach((articleType) => {
        const files: string[] = readdirSync(`./src/blog/${articleType}`)

        files.forEach((articleName) => {
          const filename = articleName.substring(0, articleName.lastIndexOf('.')) || articleName
          articlesNames = [...articlesNames, { type: articleType, slug: filename }]
        })
      })
      return articlesNames
    }
  } catch (error) {
    console.log(error)
    return []
  }
  return []
}
