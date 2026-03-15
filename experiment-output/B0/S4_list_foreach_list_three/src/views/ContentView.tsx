import React, { useState } from 'react'

interface Item {
  id: string
  t: string
}

const ContentView: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: '1', t: 'X' },
    { id: '2', t: 'Y' },
    { id: '3', t: 'Z' },
  ])

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.t}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView