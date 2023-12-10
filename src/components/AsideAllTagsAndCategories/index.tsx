import { AllCategories, AllTags } from './components'

interface AsideAllTagsAndCategoriesProps {
  selectedTag?: string
  selectedCategory?: string
}

export function AsideAllTagsAndCategories({ selectedTag, selectedCategory }: AsideAllTagsAndCategoriesProps) {
  return (
    <>
      <AllCategories selectedCategory={selectedCategory} />
      <AllTags selectedTag={selectedTag} />
    </>
  )
}
