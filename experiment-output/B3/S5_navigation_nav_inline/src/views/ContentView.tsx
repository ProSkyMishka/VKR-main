import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [currentScreen, setCurrentScreen] = useState<'list' | 'detail'>('list')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {currentScreen === 'list' ? (
        <div>
          <a href="#" onClick={() => setCurrentScreen('detail')}>
            <span>A</span>
          </a>
        </div>
      ) : (
        <div>
          <span>A</span>
        </div>
      )}
    </div>
  )
}