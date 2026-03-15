import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [scale, setScale] = useState<number>(1)

  const handleAnimate = () => {
    setScale(scale === 1 ? 1.5 : 1)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span style={{ transform: `scale(${scale})` }}>Anim</span>
        <button type="button" onClick={handleAnimate} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          Animate
        </button>
      </div>
    </div>
  )
}

export default ContentView