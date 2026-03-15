import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [currentScreen, setCurrentScreen] = useState<'link' | 'dest'>('link')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {currentScreen === 'link' && (
        <div>
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => setCurrentScreen('dest')}
          >
            Go
          </span>
        </div>
      )}
      {currentScreen === 'dest' && (
        <div>
          <span>Dest</span>
        </div>
      )}
    </div>
  )
}