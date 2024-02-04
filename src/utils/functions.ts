import type { IArticle, IRecommendedArticle } from '@/@types/Article'

export function getTimeFormated(dateString: string) {
  const date = new Date(dateString)
  const publishedDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date)

  return publishedDate
}

export function getRecommendedArticles(article: IArticle, allPost: IArticle[]): IRecommendedArticle[] {
  const recommendedArticles: IRecommendedArticle[] = []

  allPost.forEach((item) => {
    if (item.slug !== article.slug) {
      let points = 0
      item.tags.forEach((tag) => {
        if (article.tags.includes(tag))
          points += 1
      })
      recommendedArticles.push({ id: item.slug, points, article: item })
    }
  })

  const sorted = recommendedArticles.sort(({ points: pointsA }, { points: pointsB }) => pointsB - pointsA)

  return sorted.slice(0, 3)
}

export function getAllTags(allPost: IArticle[]) {
  const contentField: string[] = []
  allPost.forEach((article) => {
    article.tags.forEach((tag) => {
      if (!contentField.includes(tag))
        contentField.push(tag)
    })
  })
  return contentField
}

export function getAllCategories(allPost: IArticle[]) {
  const contentField: string[] = []
  allPost.forEach((article) => {
    if (!contentField.includes(article.category))
      contentField.push(article.category)
  })

  return contentField
}

export function getArticlesSortedByDate(articleA: IArticle, articleB: IArticle) {
  const dateArticleA = articleA.updated_at ? new Date(articleA?.updated_at) : new Date(articleA.published_date)
  const dateArticleB = articleB.updated_at ? new Date(articleB?.updated_at) : new Date(articleB.published_date)

  if (dateArticleA > dateArticleB)
    return -1

  if (dateArticleA < dateArticleB)
    return 1

  return 0
}
