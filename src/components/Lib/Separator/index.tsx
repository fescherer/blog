'use client'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

interface SeparatorProps {
  dataOrientation?: 'horizontal' | 'vertical'
}

export function Separator({ dataOrientation = 'horizontal' }: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root className="my-[15px] bg-bg-on-background opacity-40 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" orientation={dataOrientation} />
  )
}
