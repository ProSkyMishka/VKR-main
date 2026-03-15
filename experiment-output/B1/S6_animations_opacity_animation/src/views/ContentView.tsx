import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span style={{ opacity: show ? 1 : 0, animation: `${show ? 'fadeIn' : 'fadeOut'} 0.5s ease-in-out` }}>Fade</span>
        <button type="button" onClick={() => setShow(!show)} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          Toggle
        </button>
      </div>
    </div>
  )
}

export default ContentView