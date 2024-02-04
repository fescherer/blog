import { Link } from '@/components/Lib/Link'
import type { IArticle } from '@/@types/Article'
import { Laptop, LayoutGrid } from 'lucide-react'
import { GithubIcon } from '@/Icons/Social'

interface NavigationHeaderProps {
  article: IArticle
}

export function NavigationHeader({ article }: NavigationHeaderProps) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 text-xs capitalize">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href={`/${article.category}`}>{article.category}</Link>
        <span>/</span>
        <Link href={`/${article.category}/${article.slug}`}>{article.slug}</Link>
      </div>

      <div className="flex gap-2">
        {
          article.project_url
            ? (
              <Link aria-label="Go to project's deploy" href={article.project_url}>
                <Laptop size={24} />
              </Link>
              )
            : null
        }

        {
          article.figma_url
            ? (
              <Link aria-label="Go to Figma's page" href={article.figma_url}>
                <LayoutGrid size={24} />
              </Link>
              )
            : null
        }

        {
          article.github_url
            ? (
              <Link aria-label="Go to source code in Github" href={article.github_url}>
                <GithubIcon />
              </Link>
              )
            : null
        }
      </div>
    </div>
  )
}
