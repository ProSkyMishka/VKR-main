import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [scale, setScale] = useState<number>(1)

  const handleAnimate = () => {
    setScale(scale === 1 ? 1.5 : 1)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ transform: `scale(${scale})` }}>Anim</h1>
      <button onClick={handleAnimate}>Animate</button>
    </div>
  )
}

export default ContentView