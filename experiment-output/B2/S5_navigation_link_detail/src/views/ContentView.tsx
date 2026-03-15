import React, { useState } from 'react'
import DetailView from './DetailView'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [currentScreen, setCurrentScreen] = useState<'detail' | 'root'>('root')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {currentScreen === 'root' ? (
        <div>
          <a href="#" onClick={() => setCurrentScreen('detail')}>Open</a>
        </div>
      ) : (
        <DetailView title="Open" />
      )}
    </div>
  )
}

export default ContentView