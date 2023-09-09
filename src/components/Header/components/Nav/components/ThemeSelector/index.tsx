import { Dropdown } from '@/components/Primitives'

export function ThemeSelector() {
  return (
    <Dropdown>
      <Dropdown.Trigger>Themes</Dropdown.Trigger>

      <Dropdown.Content>
        <ul>
          <li>Claro</li>
          <li>Escuro</li>
          <li>Esmeralda</li>
        </ul>
      </Dropdown.Content>
    </Dropdown>
  )
}
