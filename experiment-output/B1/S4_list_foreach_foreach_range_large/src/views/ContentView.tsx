import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [items, setItems] = useState<number[]>(Array.from({ length: 20 }, (_, i) => i))

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {items.map((i) => (
          <li key={i}>Item {i}</li>
        ))}
      </ul>
    </div>
  )
}