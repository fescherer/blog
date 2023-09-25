import clsx from 'clsx'
import { Card } from '@/components/Lib/Card'
import { Link } from '@/components/Lib/Link'
import { getAllCategories } from '@/utils/functions'

interface AllCategoriesProps {
  selectedCategory?: string
}

export function AllCategories({ selectedCategory }: AllCategoriesProps) {
  const allcategories = getAllCategories()

  return (
    <Card title='All categories'>
      <ul className='flex list-disc flex-col gap-1 pl-4 capitalize'>
        {allcategories.map(category => (
          <li key={category} className={clsx({ 'text-primary': selectedCategory === category })}>
            <Link aria-label={`Remove category filter for ${category}`} target='_self' href={category === selectedCategory ? '/' : `/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}
