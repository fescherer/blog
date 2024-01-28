import { SourceRef } from './components'
import type { IArticle } from '@/@types/Article'

interface SourcesRefProps {
  article: IArticle
}

export function SourcesRef({ article }: SourcesRefProps) {
  return (
    <div>
      <h2>References</h2>

      {
        article.sources.map(item => (<SourceRef key={item.title} item={item} />))
      }
    </div>
  )
}
