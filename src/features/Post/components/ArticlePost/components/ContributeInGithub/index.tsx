import { IArticle } from '@/@types/Article'
import { Card } from '@/components/Lib/Card'
import { Link } from '@/components/Primitives'
import { ownerConfigs } from '@/utils/ownerConfigs'
import { LucideNotebookPen } from 'lucide-react'

interface ContributeInGithubProps {
  article: IArticle
}
export function ContributeInGithub({ article }: ContributeInGithubProps) {
  return (
    <Card title="Help us improve">
      <p>
        <span>
          If you find any mistakes or just want to make the article more complete, consider
          {' '}
        </span>

        <Link target="_blank" href={`${ownerConfigs.repo}/blob/main/src/blog/${article.category}/${article.slug}.mdx`}>
          editing this page in Github.
        </Link>
      </p>

      <div className="flex justify-end">
        <Link target="_blank" href="https://github.com/fescherer/utils/blob/main/CONTRIBUTING.md"className="flex items-center gap-1 text-sm">
          <LucideNotebookPen size={14} />
          <span>Contribution guide</span>
        </Link>
      </div>

    </Card>
  )
}
