import { generateRss } from '@/utils/generateRSS'

export async function GET() {
  const { atom } = await generateRss()

  return new Response(atom, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  })
}
