import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [show, setShow] = useState<boolean>(true)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        {show && <span>Visible</span>}
        <button
          type="button"
          onClick={() => {
            setShow((prevShow) => !prevShow)
          }}
          style={{
            border: 'none',
            background: 'none',
            color: '#007AFF',
            cursor: 'pointer',
            padding: 0,
            fontSize: 'inherit',
          }}
        >
          Toggle
        </button>
      </div>
    </div>
  )
}

export default ContentView