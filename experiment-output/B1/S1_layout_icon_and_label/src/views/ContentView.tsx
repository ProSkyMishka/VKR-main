import React from 'react'

const ContentView = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'center', padding: 16 }}>
        <span style={{ color: 'yellow' }}>★</span>
        <span>Favorite</span>
      </div>
    </div>
  )
}

export default ContentView