import type { IRecommendedArticle } from '@/@types'
import { type Doc, allDocs } from 'contentlayer/generated'

export function getTimeFormated(dateString: string) {
  const date = new Date(dateString)
  const publishedDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date)

  return publishedDate
}

export function getRecommendedArticles(doc: Doc): IRecommendedArticle[] {
  const recommendedArticles: IRecommendedArticle[] = []

  allDocs.forEach((item) => {
    if (item._id !== doc._id) {
      let points = 0
      item.tags.forEach((tag) => {
        if (doc.tags.includes(tag))
          points += 1
      })
      recommendedArticles.push({ id: item._id, points, doc: item })
    }
  })

  const sorted = recommendedArticles.sort(({ points: pointsA }, { points: pointsB }) => pointsB - pointsA)

  return sorted.slice(0, 3)
}

export function getAllTags() {
  const contentField: string[] = []
  allDocs.forEach((article) => {
    article.tags.forEach((tag) => {
      if (!contentField.includes(tag))
        contentField.push(tag)
    })
  })
  return contentField
}

export function getAllCategories() {
  const contentField: string[] = []
  allDocs.forEach((article) => {
    article.categories.forEach((tag) => {
      if (!contentField.includes(tag))
        contentField.push(tag)
    })
  })

  return contentField
}

export function getArticlesSortedByDate(articleA: Doc, articleB: Doc) {
  const dateArticleA = articleA.updated_at ? new Date(articleA?.updated_at) : new Date(articleA.published_date)
  const dateArticleB = articleB.updated_at ? new Date(articleB?.updated_at) : new Date(articleB.published_date)

  if (dateArticleA > dateArticleB)
    return -1

  if (dateArticleA < dateArticleB)
    return 1

  return 0
}
