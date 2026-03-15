import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [big, setBig] = useState(false)

  return (
    <div>
      <h1 style={{ transform: `scale(${big ? 2 : 1})`, transition: 'transform 0.3s ease-in-out' }}>
        Scale
      </h1>
      <button onClick={() => setBig(!big)}>Toggle</button>
    </div>
  )
}

export default ContentView