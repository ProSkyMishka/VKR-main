import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [items, setItems] = useState(["X", "Y", "Z"])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <ul>
          {items.map((item) => (
            <a href="#" key={item}>
              <span>Detail {item}</span>
            </a>
          ))}
        </ul>
      </div>
    </div>
  )
}