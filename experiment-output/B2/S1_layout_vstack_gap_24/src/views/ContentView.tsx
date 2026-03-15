import React from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center', padding: 20 }}>
        <span>Line 1</span>
        <span>Line 2</span>
      </div>
    </div>
  )
}

export default ContentView