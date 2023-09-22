import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import { Pre } from './components'

const components = {
  h1: ({ children, ...props }: any | undefined) => (
    <h1 className='scroll-m-24' {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 className='scroll-m-24' {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className='scroll-m-24' {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: any) => (
    <h4 className='scroll-m-24' {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }: any) => (
    <h5 className='scroll-m-24' {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }: any) => (
    <h6 className='scroll-m-24' {...props}>
      {children}
    </h6>
  ),

  // How to create a copy code button https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype
  pre: ({ ...props }: any) => (<Pre {...props} />),

  a: ({ children, ...props }: any) => (
    <Link {...props} target='_blank' className='tracking-wide text-secondary transition-all hover:border-b hover:border-b-primary-hover hover:text-primary-hover'>{children}</Link>
  ),
  p: ({ children, ...props }: any) => (
    <p className='my-10 leading-normal tracking-wide' {...props}>
      {children}
    </p>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote className=' mt-6 border-l-2 border-l-text pl-6 italic' {...props}>
      {children}
    </blockquote>
  ),

  ul: ({ children, ...props }: any) => (
    <ul className='list-disc' {...props}>
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

  table: ({ children, ...props }: any) => (
    <table className='border-collapse' {...props}>
      {children}
    </table>
  ),
  th: ({ children, ...props }: any) => (
    <th className='border border-foreground bg-foreground text-center' {...props}>
      {children}
    </th>
  ),
  tr: ({ children, ...props }: any) => (
    <tr className='' {...props}>
      {children}
    </tr>
  ),
  td: ({ children, ...props }: any) => (
    <td className='border border-foreground px-6 py-2 text-center' {...props}>
      {children}
    </td>
  ),

}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div>
      <Component components={components} />
    </div>
  )
}
