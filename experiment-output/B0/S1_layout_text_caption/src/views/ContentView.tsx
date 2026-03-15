import React from 'react'

const ContentView: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Title</h1>
      <p style={{ color: '#6c757d', fontSize: '0.875rem' }}>Caption</p>
    </div>
  )
}

export default ContentView