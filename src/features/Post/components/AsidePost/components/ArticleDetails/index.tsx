import { Card } from '@/components/Lib/Card'

export function ArticleDetails() {
  return (
    <Card>
      <h2>Article Details</h2>

      <div>
        <h3>Date:</h3>
        <span>12 January, 2023</span>
      </div>

      <div>
        <h3>Category</h3>
        <span>Frontend</span>
      </div>

      <div>
        <h3>Tags:</h3>
        <div>
          <span>React</span>
          <span>React</span>
          <span>React</span>
          <span>React</span>
        </div>
      </div>

      <div>
        <h3>Links:</h3>
        <div>
          <span>Deploy</span>
          <span>Figma</span>
          <span>Github</span>
        </div>
      </div>
    </Card>
  )
}
