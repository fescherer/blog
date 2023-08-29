import type { Doc } from 'contentlayer/generated'

export interface IRecommendedArticle {
  id: string
  points: number
  doc: Doc
}
