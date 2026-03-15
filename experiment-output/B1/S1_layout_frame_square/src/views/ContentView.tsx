import React from 'react'

const ContentView = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 255, 0.2)' }}>
        <span>Box</span>
      </div>
    </div>
  )
}

export default ContentView