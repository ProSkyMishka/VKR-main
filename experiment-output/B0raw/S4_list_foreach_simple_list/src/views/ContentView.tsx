import React, { useState } from 'react'

interface Item {
  id: string
  name: string
}

const ContentView: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: '1', name: 'Apple' },
    { id: '2', name: 'Banana' },
    { id: '3', name: 'Cherry' }
  ])

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView