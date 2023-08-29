export function getTimeFormated(dateString: string) {
  const date = new Date(dateString)
  const publishedDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)

  return publishedDate
}
