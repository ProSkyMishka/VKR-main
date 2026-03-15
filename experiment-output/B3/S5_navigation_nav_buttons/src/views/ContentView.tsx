import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [currentScreen, setCurrentScreen] = useState<'first' | 'second'>('first')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
          <a href="#" onClick={() => setCurrentScreen('first')}>
            <span>First</span>
          </a>
          <a href="#" onClick={() => setCurrentScreen('second')}>
            <span>Second</span>
          </a>
        </div>
      </div>
    </div>
  )
}