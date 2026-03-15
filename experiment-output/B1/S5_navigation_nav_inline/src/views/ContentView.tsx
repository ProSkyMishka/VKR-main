import React, { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [currentScreen, setCurrentScreen] = useState<string>('list')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <a href="#" onClick={() => setCurrentScreen('a')}>
          <span>A</span>
        </a>
        <a href="#" onClick={() => setCurrentScreen('b')}>
          <span>B</span>
        </a>
      </div>
    </div>
  )
}

export default ContentView