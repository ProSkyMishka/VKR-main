import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>Item {i}</span>
        ))}
      </div>
    </div>
  )
}