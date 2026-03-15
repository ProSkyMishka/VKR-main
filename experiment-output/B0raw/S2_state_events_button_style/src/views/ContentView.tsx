import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [tapped, setTapped] = useState(false)

  return (
    <button
      style={{
        padding: '0.5rem',
      }}
      onClick={() => setTapped(true)}
    >
      {tapped ? 'Done' : 'Tap'}
    </button>
  )
}

export default ContentView