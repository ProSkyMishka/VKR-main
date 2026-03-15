import { useState } from 'react'

interface Item {
  id: string
  name: string
}

const ContentView = () => {
  const [items, setItems] = useState<Item[]>([
    { id: '1', name: 'Apple' },
    { id: '2', name: 'Banana' },
    { id: '3', name: 'Cherry' },
  ])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView