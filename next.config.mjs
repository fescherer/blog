import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import withSerwistInit from '@serwist/next'

const withSerwist = withSerwistInit({
  // Note: This is only an example. If you use Pages Router,
  // use something else that works, such as "service-worker/index.ts".
  swSrc: 'src/app/sw.js',
  swDest: 'public/sw.js',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // swSrc: 'app/sw.ts',
  // swDest: 'public/sw.js',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  eslint: {
    dirs: ['src'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
}

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeConfig = {
  theme: 'dracula',
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      // rehypeHighlight,
      [rehypePrettyCode, rehypePrettyCodeConfig],
      // rehypeSlug,
      // [rehypeAutolinkHeadings,{
      //   behavior: 'wrap',
      //   properties: {
      //     className: ['-mt-4 pt-4'],
      //   }
      // }],
    ],
  },
})

export default withSerwist(withMDX(nextConfig))
