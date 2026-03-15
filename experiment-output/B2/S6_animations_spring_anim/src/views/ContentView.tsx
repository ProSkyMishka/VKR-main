import React, { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [scale, setScale] = useState<number>(1)

  const handleBounce = () => {
    setScale(scale === 1 ? 1.3 : 1)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <span style={{ transform: `scale(${scale})`, transition: 'transform 0.5s ease' }}>Spring</span>
      <button onClick={handleBounce}>Bounce</button>
    </div>
  )
}

export default ContentView