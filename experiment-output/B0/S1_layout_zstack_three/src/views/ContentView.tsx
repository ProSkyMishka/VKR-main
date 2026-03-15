import React from 'react'
import { useState } from 'react'

const ContentView: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'rgba(128, 128, 128, 0.2)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <div style={{ fontSize: '0.75rem' }}>Top</div>
        <div>Middle</div>
      </div>
    </div>
  )
}

export default ContentView