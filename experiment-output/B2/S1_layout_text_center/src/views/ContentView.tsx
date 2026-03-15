import React from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span style={{ fontSize: 24, fontWeight: 'bold' }}>Centered</span>
    </div>
  )
}

export default ContentView