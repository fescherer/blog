import type { Thing, WithContext } from 'schema-dts'

export function JSONLD<T extends Thing>(json: WithContext<T>) {
  return (
    <script
      type="application/ld+json"
        // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
