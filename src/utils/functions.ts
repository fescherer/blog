import type { IRecommendedArticle } from '@/@types'
import type { Doc } from 'contentlayer/generated'

export function getTimeFormated(dateString: string) {
  const date = new Date(dateString)
  const publishedDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)

  return publishedDate
}

export function getRecommendedArticles(allDocs: Doc[], doc: Doc): IRecommendedArticle[] {
  const recommendedArticles: IRecommendedArticle[] = []

  allDocs.forEach((item) => {
    let points = 0
    item.tags.forEach((tag) => {
      if (doc.tags.includes(tag))
        points += 1
    })
    recommendedArticles.push({ id: item._id, points, doc: item })
  })

  const sorted = recommendedArticles.sort(({ points: pointsA }, { points: pointsB }) => pointsB - pointsA)

  return sorted.slice(0, 3)
}
