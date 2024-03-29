import { CopyButton } from './components'

export function Pre({ children, raw, ...props }: any) {
  const lang = (props['data-language']) || 'shell'
  return (
    <pre {...props} className="my-10 max-w-full overflow-x-auto rounded-md">
      <span className="flex w-full justify-between bg-code-header px-4 py-2">
        {lang}
        <CopyButton text={(raw as string) || ''} />
      </span>

      <span className="p-2 ">
        {children}
      </span>
    </pre>
  )
}
