import React, { useState } from 'react'
import PageA from './PageA'
import PageB from './PageB'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [currentScreen, setCurrentScreen] = useState<'pageA' | 'pageB'>('pageA')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
          <a href="#" onClick={() => setCurrentScreen('pageA')}>To A</a>
          <a href="#" onClick={() => setCurrentScreen('pageB')}>To B</a>
        </div>
        {currentScreen === 'pageA' && <PageA />}
        {currentScreen === 'pageB' && <PageB />}
      </div>
    </div>
  )
}

export default ContentView