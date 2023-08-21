'use client'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

interface SeparatorProps {
  dataOrientation?: 'horizontal' | 'vertical'
}

export function Separator({ dataOrientation = 'horizontal' }: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root className="bg-text data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" orientation={dataOrientation}/>
  )
}
