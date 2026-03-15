import React from 'react'

const ContentView = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', padding: 16 }}>
        <img src="logo.png" alt="Logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 120, height: 120 }} />
        <span>Caption</span>
      </div>
    </div>
  )
}

export default ContentView