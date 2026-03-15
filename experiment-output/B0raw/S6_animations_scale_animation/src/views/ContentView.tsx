import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [scaled, setScaled] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ transform: `scale(${scaled ? 1.5 : 1})`, transition: 'transform 0.3s ease' }}>Scale</h1>
      <button onClick={() => setScaled(!scaled)} style={{ marginTop: '1rem' }}>
        Toggle
      </button>
    </div>
  )
}

export default ContentView