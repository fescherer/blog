import { generateRss } from '@/utils/generateRSS'

export function GET() {
  const { rss } = generateRss()

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
