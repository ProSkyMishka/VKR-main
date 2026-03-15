import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [currentScreen, setCurrentScreen] = useState<'A' | 'B'>('A')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {currentScreen === 'A' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span>A1</span>
          <span>A2</span>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span>B1</span>
          <span>B2</span>
        </div>
      )}
    </div>
  )
}