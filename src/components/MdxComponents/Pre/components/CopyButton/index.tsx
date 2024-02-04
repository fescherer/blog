'use client'

import { useState } from 'react'
import { Copy, CopyCheck } from 'lucide-react'
interface CopyButtonProps {
  text: string
}

export function CopyButton({ text }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = () => {
    void (async () => {
      await navigator.clipboard.writeText(text)
    })()

    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }

  return (
    <button aria-label="Copy code" type="button" disabled={isCopied} onClick={copy}>
      {/* <Copy size={20} weight={isCopied ? 'fill' : 'regular'} /> */}
      {
        isCopied ? <CopyCheck className="text-brand-primary" /> : <Copy className="transition-all hover:text-brand-primary" />
      }
    </button>
  )
}
