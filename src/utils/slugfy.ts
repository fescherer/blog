export function slugyfy(title: string) {
  const re = /[^\w\s]/g

  return title.trim().toLowerCase().replace(re, '').replace(/\s+/g, '-')
}
