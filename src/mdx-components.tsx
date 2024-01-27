import type { MDXComponents } from 'mdx/types'
import { slugyfy } from './utils/slugfy'
import { Link } from './components/Primitives'
import { Pre } from './components/MdxComponents'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 id={slugyfy(children?.toString() || '')} className="inline-block scroll-m-24 text-bg-on-background"><a href={`#${slugyfy(children?.toString() || '')}`}>#{children}</a></h1>,
    h2: ({ children }) => <h2 id={slugyfy(children?.toString() || '')} className="mt-5 inline-block scroll-m-24 text-bg-on-background"><a href={`#${slugyfy(children?.toString() || '')}`}>#{children}</a></h2>,
    h3: ({ children }) => <h3 id={slugyfy(children?.toString() || '')} className="mt-5 inline-block scroll-m-24 text-bg-on-background"><a href={`#${slugyfy(children?.toString() || '')}`}>#{children}</a></h3>,
    h4: ({ children }) => <h4 id={slugyfy(children?.toString() || '')} className="mt-5 inline-block scroll-m-24 text-bg-on-background"><a href={`#${slugyfy(children?.toString() || '')}`}>#{children}</a></h4>,
    h5: ({ children }) => <h5 id={slugyfy(children?.toString() || '')} className="mt-5 inline-block scroll-m-24 text-bg-on-background"><a href={`#${slugyfy(children?.toString() || '')}`}>#{children}</a></h5>,
    h6: ({ children }) => <h6 id={slugyfy(children?.toString() || '')} className="mt-5 inline-block scroll-m-24 text-bg-on-background"><a href={`#${slugyfy(children?.toString() || '')}`}>#{children}</a></h6>,
    table: ({ children, ...props }: any) => (
      <table className='border-collapse' {...props}>
        {children}
      </table>
    ),
    p: ({ children, ...props }: any) => (
      <p className='my-3 leading-normal tracking-wide' {...props}>
        {children}
      </p>
    ),
    th: ({ children, ...props }: any) => (
      <th className='border border-bg-foreground bg-bg-foreground text-center' {...props}>
        {children}
      </th>
    ),
    tr: ({ children, ...props }: any) => (
      <tr className='' {...props}>
        {children}
      </tr>
    ),
    td: ({ children, ...props }: any) => (
      <td className='border border-bg-foreground px-6 py-2 text-center' {...props}>
        {children}
      </td>
    ),
    // How to create a copy code button https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype
    pre: ({ ...props }: any) => (<Pre {...props} />),

    a: ({ children, ...props }: any) => (
      <Link aria-label={`Go to ${children}`} {...props} target='_blank' className='tracking-wide text-brand-primary transition-all hover:border-b hover:border-b-brand-primary-hover hover:text-brand-primary-hover'>{children}</Link>
    ),

    ul: ({ children, ...props }: any) => (
      <ul className='ml-4 list-disc' {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: any) => (
      <ol className='list-decimal' {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: any) => (
      <li className='' {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }: any) => (
      <blockquote className=' mt-6 border-l-2 border-l-bg-foreground pl-6 italic' {...props}>
        {children}
      </blockquote>
    ),
    // img: (props) => (
    //   <Image
    //     sizes="100vw"
    //     width={100}
    //     height={200}
    //     style={{ width: '100%', height: 'auto' }}
    //     {...(props as ImageProps)}
    //   />
    // ),
    ...components,
  }
}
