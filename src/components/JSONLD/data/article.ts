import type { Article, WithContext } from 'schema-dts'
import { felipeschererData } from './publisher'

export const articleJSONLD: WithContext<Article> = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'publisher': felipeschererData,
  'author': felipeschererData,
}

export function getArticleJSONLD(props: Article) {
  return { ...articleJSONLD, ...props }
}
