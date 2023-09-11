import { SourceRef } from './components'
import type { Doc } from 'contentlayer/generated'

interface SourcesRefProps {
  doc: Doc
}

export function SourcesRef({ doc }: SourcesRefProps) {
  // const { refDate, refLink } = doc

  return (
    <div>
      <h2>References</h2>

      {
        doc.sources.map(item => (<SourceRef key={item} item={item} />))
      }
    </div>
  )
}
