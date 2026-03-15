import React, { useState } from 'react'

const ContentView: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ marginBottom: '0.5rem' }}>Header</h2>
      <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
        <div>Row 1</div>
        <div>Row 2</div>
      </div>
      <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#666' }}>
        Footer
      </div>
    </div>
  )
}

export default ContentView