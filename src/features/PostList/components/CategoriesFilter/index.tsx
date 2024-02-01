import { getAllCategories } from '@/utils/functions'
import { getPostsData } from '@/utils/functions/getPostsData'
import { Category } from './components'

type CategoriesFilterProps = {
  selectedCategory: string
}

export async function CategoriesFilter({ selectedCategory }: CategoriesFilterProps) {
  const articles = await getPostsData()
  const allcategories = getAllCategories(articles)

  return (
    <div className="flex items-center gap-2">
      {
      allcategories.map(category => (
        <Category selectedCategory={selectedCategory} key={category} category={category} />
      ))
    }
    </div>
  )
}
