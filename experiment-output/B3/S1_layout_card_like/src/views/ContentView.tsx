import React from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', padding: 16, backgroundColor: 'rgba(128,128,128,0.15)', borderRadius: 12 }}>
        <span>Card Title</span>
        <span>Card body text here.</span>
      </div>
    </div>
  )
}

export default ContentView