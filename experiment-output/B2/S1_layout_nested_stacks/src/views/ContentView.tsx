import React from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', padding: 16 }}>
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>D</span>
      </div>
    </div>
  )
}

export default ContentView