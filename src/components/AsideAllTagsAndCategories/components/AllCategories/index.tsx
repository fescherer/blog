import clsx from 'clsx'
import { Card } from '@/components/Lib/Card'
import { Link } from '@/components/Lib/Link'
import { getPostsData } from '@/utils/functions/getPostsData'
import { getAllCategories } from '@/utils/functions'

interface AllCategoriesProps {
  selectedCategory?: string
}

export async function AllCategories({ selectedCategory }: AllCategoriesProps) {
  const articles = await getPostsData()
  const allcategories = getAllCategories(articles)

  return (
    <Card title="All categories">
      <ul className="flex list-disc flex-col gap-1 pl-4 capitalize">
        {allcategories.map(category => (
          <li key={category} className={clsx({ 'text-brand-primary font-bold': selectedCategory === category })}>
            <Link
              aria-label={`Remove category filter for ${category}`}
              target="_self"
              href={category === selectedCategory ? '/' : `/${category}`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}
