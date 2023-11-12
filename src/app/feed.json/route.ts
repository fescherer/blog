import { generateRss } from '@/utils/generateRSS'

export function GET() {
  const { json } = generateRss()

  return new Response(json, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  })
}
