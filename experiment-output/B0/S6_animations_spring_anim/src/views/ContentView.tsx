import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [scale, setScale] = useState<number>(1)

  const handleBounce = () => {
    setScale(scale === 1 ? 1.3 : 1)
  }

  return (
    <div>
      <h1 style={{ transform: `scale(${scale})`, transition: 'transform 0.5s ease' }}>Spring</h1>
      <button onClick={handleBounce}>Bounce</button>
    </div>
  )
}

export default ContentView