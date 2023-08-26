import { CopyButton } from './components'

export function Pre({ children, raw, ...props }: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const lang = (props['data-language']) || 'shell'
  return (
    <pre {...props} className={'overflow-scroll max-w-full rounded-md'}>
      <div className='flex justify-between px-4 py-2 bg-code-header'>
        {lang}
        <CopyButton text={(raw as string) || ''} />
      </div>
      <div className='p-2'>
        {children}
      </div>
    </pre>
  )
}
