import { generateRss } from '@/utils/generateRSS'

export async function GET() {
  try {
    const { rss } = await generateRss()

    return new Response(rss, {
      status: 200,
      headers: {
        'content-type': 'application/xml; charset=utf-8',
      },
    })
  } catch (error) {
    return new Response(`Failed to fetch feed`, {
      status: 500,
    })
  }
}
