import React from 'react'

const ContentView: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <h1 style={{ fontSize: '2rem' }}>Centered</h1>
    </div>
  )
}

export default ContentView