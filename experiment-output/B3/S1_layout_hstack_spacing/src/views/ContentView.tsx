import React from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', padding: 20 }}>
        <span>Left</span>
        <span>Center</span>
        <span>Right</span>
      </div>
    </div>
  )
}

export default ContentView