import { readdirSync } from 'node:fs'

/**
 * Scan the blog directory and return an array of file names
 * @returns
 */
export function getPostNames(): string[] {
  try {
    // Read the /blog folder at root dir
    const fileList: string[] = readdirSync('./blog/')
    // Return an array of filenames at this dir
    if (fileList.length > 0) {
      return fileList.map((file) => {
        // Remove extension
        return file.substring(0, file.lastIndexOf('.')) || file
      })
    }
  } catch (error) {}
  return []
}
