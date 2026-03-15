import React from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', padding: 8 }}>
        <span>One</span>
        <span>Two</span>
        <span>Three</span>
        <span>Four</span>
        <span>Five</span>
      </div>
    </div>
  )
}

export default ContentView