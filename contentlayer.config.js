import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeading from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { visit } from 'unist-util-visit'
import { bundleMDX } from 'mdx-bundler'
import { toMarkdown } from 'mdast-util-to-markdown'
import { mdxToMarkdown } from 'mdast-util-mdx'

function tocPlugin(headings) {
  return () => {
    return (node) => {
      for (const element of node.children.filter(_ => _.type === 'heading' || _.name === 'OptionsTable')) {
        if (element.type === 'heading') {
          const title = toMarkdown({ type: 'paragraph', children: element.children }, { extensions: [mdxToMarkdown()] })
            .trim()
            .replace(/<.*$/g, '')
            .replace(/\\/g, '')
            .trim()
          headings.push({ level: element.depth, title })
        }
        else if (element.name === 'OptionsTable') {
          element.children
            .filter(_ => _.name === 'OptionTitle')
            .forEach((optionTitle) => {
              optionTitle.children
                .filter(_ => _.type === 'heading')
                .forEach((heading) => {
                  const title = toMarkdown(
                    { type: 'paragraph', children: heading.children },
                    { extensions: [mdxToMarkdown()] },
                  )
                    .trim()
                    .replace(/<.*$/g, '')
                    .replace(/\\/g, '')
                    .trim()
                  headings.push({ level: heading.depth, title })
                })
            })
        }
      }
    }
  }
}
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
  headings: {
    type: 'json',
    resolve: async (doc) => {
      const headings = []

      await bundleMDX({
        source: doc.body.raw,
        mdxOptions: (opts) => {
          opts.remarkPlugins = [...(opts.remarkPlugins ?? []), tocPlugin(headings)]
          return opts
        },
      })

      return [{ level: 1, title: doc.title }, ...headings]
    },
  },
}

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    published_date: {
      type: 'string',
      default: true,
    },
    image: {
      type: 'string',
      required: true,
    },
    alt: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    video_url: {
      type: 'string',
    },
    project_url: {
      type: 'string',
    },
    figma_url: {
      type: 'string',
    },
    github_url: {
      type: 'string',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    categories: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    sources: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'blog',
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children

            if (codeEl.tagName !== 'code')
              return

            node.raw = codeEl.children?.[0].value
          }
        })
      },
      [
        rehypePrettyCode, {
          theme: { dark: 'dracula', light: 'rose-pine-dawn' },

          onVisitLine(node) {
            // Prevent lines from collapsing in display: grid mode, and allow
            // empty lines to be copy/pasted
            if (node.children.length === 0)
              node.children = [{ type: 'type', value: ' ' }]
          },
          onVisitHightlightedLine(node) {
            node.properties.className.push('line--hightlighted')
            node.properties.className.push('line--highlighted')
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
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'div') {
            if (!('data-rehype-pretty-code-fragment' in node.properties))
              return

            for (const child of node.children) {
              if (child.tagName === 'pre')
                child.properties.raw = node.raw
            }
          }
        })
      },
    ],
  },
})
