import React from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#FF0000', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <span style={{ color: '#FFFFFF' }}>Red</span>
      </div>
    </div>
  )
}

export default ContentView