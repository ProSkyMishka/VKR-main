import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView = () => {
  const [currentScreen, setCurrentScreen] = useState<'stack' | 'other'>(
    'stack'
  )

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span>Stack root</span>
      </div>
    </div>
  )
}

export default ContentView