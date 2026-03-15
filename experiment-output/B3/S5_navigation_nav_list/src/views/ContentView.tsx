import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [currentScreen, setCurrentScreen] = useState<'list' | 'other'>(
    'list'
  )

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {currentScreen === 'list' && (
        <div>
          <span>Row 1</span>
          <span>Row 2</span>
        </div>
      )}
    </div>
  )
}