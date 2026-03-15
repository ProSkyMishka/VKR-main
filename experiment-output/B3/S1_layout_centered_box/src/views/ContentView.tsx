import React from 'react'

const ContentView: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <div style={{ flex: 1, minWidth: 0, minHeight: 0 }} />
        <span style={{ padding: 24, backgroundColor: 'rgba(255,165,0,0.3)', borderRadius: 8 }}>Center</span>
        <div style={{ flex: 1, minWidth: 0, minHeight: 0 }} />
      </div>
    </div>
  )
}

export default ContentView