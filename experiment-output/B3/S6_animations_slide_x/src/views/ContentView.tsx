import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [offset, setOffset] = useState<number>(0)

  const handleButtonClick = () => {
    setOffset(offset === 0 ? 80 : 0)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span style={{ transform: `translateX(${offset}px)`, transition: 'transform 0.5s ease' }}>Slide</span>
        <button
          type="button"
          onClick={handleButtonClick}
          style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}
        >
          Move
        </button>
      </div>
    </div>
  )
}

export default ContentView