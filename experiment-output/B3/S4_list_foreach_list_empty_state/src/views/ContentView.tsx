import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [items, setItems] = useState<string[]>([])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}