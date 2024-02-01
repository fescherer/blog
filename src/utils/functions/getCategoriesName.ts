import { readdirSync } from 'node:fs'

/**
 * Scan the blog directory and return an array of category names
 * @returns
 */
export function getCategoriesName(): string[] {
  try {
    // Read the /blog folder at root dir
    const typesListFolder: string[] = readdirSync('./src/blog/')
    console.log(typesListFolder)
    return typesListFolder
  } catch (error) {
    console.log(error)
    return []
  }
}
