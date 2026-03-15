import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [tapped, setTapped] = useState(false)

  return (
    <button
      style={{
        padding: '8px 16px',
      }}
      onClick={() => setTapped(true)}
    >
      {tapped ? 'Done' : 'Tap'}
    </button>
  )
}

export default ContentView