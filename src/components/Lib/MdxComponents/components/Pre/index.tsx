import { CopyButton } from './components'

export function Pre({ children, raw, ...props }: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const lang = (props['data-language']) || 'shell'
  return (
    <pre {...props} className={'my-10 max-w-full overflow-auto rounded-md'}>
      <span className='flex justify-between bg-code-header px-4 py-2'>
        {lang}
        <CopyButton text={(raw as string) || ''} />
      </span>
      <span className='p-2'>
        {children}
      </span>
    </pre>
  )
}
