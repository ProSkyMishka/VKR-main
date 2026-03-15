import React from 'react'

function ContentView() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '0 40px',
        gap: 20,
      }}
    >
      <div style={{ display: 'flex', gap: 20 }}>
        <div>A</div>
        <div>B</div>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <div>C</div>
        <div>D</div>
      </div>
    </div>
  )
}

export default ContentView