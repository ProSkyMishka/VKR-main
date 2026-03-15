import React, { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [currentScreen, setCurrentScreen] = useState<'main' | 'next'>('main')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {currentScreen === 'main' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
            <span>Next</span>
          </div>
        </div>
      )}
      {currentScreen === 'next' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span>Next</span>
        </div>
      )}
    </div>
  )
}