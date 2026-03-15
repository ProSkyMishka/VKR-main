import React from 'react'

const ContentView: React.FC = () => {
  return (
    <div
      style={{
        padding: '16px',
        backgroundColor: 'rgba(128, 128, 128, 0.15)',
        borderRadius: '12px'
      }}
    >
      <div style={{ marginBottom: '8px' }}>
        <h3 style={{ margin: 0 }}>Card Title</h3>
      </div>
      <div>
        <p style={{ margin: 0 }}>Card body text here.</p>
      </div>
    </div>
  )
}

export default ContentView