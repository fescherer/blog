import { generateRss } from '@/utils/generateRSS'

export function GET() {
  const { atom } = generateRss()

  return new Response(atom, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  })
}
