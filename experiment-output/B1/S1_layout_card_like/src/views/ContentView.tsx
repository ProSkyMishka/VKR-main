import React from 'react'

const ContentView = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', padding: 16, backgroundColor: 'var(--bg-gray.opacity(0.15, #eee))', borderRadius: 12 }}>
        <span>Card Title</span>
        <span>Card body text here.</span>
      </div>
    </div>
  )
}

export default ContentView