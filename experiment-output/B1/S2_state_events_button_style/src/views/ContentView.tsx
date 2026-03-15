import React, { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [tapped, setTapped] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button
        type="button"
        onClick={() => setTapped(!tapped)}
        style={{
          border: 'none',
          background: 'none',
          color: '#007AFF',
          cursor: 'pointer',
          padding: 0,
          fontSize: 'inherit'
        }}
      >
        {tapped ? 'Done' : 'Tap'}
      </button>
    </div>
  )
}

export default ContentView