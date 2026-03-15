import { useState } from 'react'

interface Item {
  id: string
  t: string
}

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [items, setItems] = useState<Item[]>([
    { id: '1', t: 'X' },
    { id: '2', t: 'Y' },
    { id: '3', t: 'Z' },
  ])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span>{item.t}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}