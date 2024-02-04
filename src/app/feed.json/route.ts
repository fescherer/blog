import { generateRss } from '@/utils/generateRSS'

export async function GET() {
  const { json } = await generateRss()

  return new Response(json, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  })
}
