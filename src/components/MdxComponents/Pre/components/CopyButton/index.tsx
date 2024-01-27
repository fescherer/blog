'use client'

import { Copy } from 'phosphor-react'
import { useState } from 'react'

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
    }, 5000)
  }

  return (
    <button aria-label="Copy code" type='button' disabled={isCopied} onClick={copy}>
      <Copy size={20} weight={isCopied ? 'fill' : 'regular'} />
    </button>
  )
}
