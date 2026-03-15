import React, { useState } from 'react'

interface Item {
  id: string
  t: string
}

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [items, setItems] = useState<Item[]>([
    { id: '1', t: 'X' },
    { id: '2', t: 'Y' },
    { id: '3', t: 'Z' }
  ])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.t}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView