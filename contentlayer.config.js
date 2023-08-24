import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeading from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: doc => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: doc => doc._raw.flattenedPath.split('/').splice(1).join('/'),

  },
}

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    published: {
      type: 'boolean',
      default: true,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode, {
          theme: 'github-dark',
          onVisitLine(node) {
            // Prevent lines from collapsing in display: grid mode, and allow
            // empty lines to be copy/pasted
            if (node.children.length === 0)
              node.children = [{ type: 'type', value: ' ' }]
          },
          onVisitHightlightedLine(node) {
            node.properties.className.push('line--hightlighted')
          },
        },
      ], [
        rehypeAutolinkHeading, {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
})
