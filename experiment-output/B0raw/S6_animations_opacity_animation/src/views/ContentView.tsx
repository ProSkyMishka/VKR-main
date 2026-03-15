import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [show, setShow] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ opacity: show ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
        <h1>Fade</h1>
      </div>
      <button onClick={() => setShow(!show)} style={{ marginTop: '1rem' }}>
        Toggle
      </button>
    </div>
  )
}

export default ContentView