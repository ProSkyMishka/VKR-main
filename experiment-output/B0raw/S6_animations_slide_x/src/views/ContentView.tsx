import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [offset, setOffset] = useState<number>(0)

  const handleButtonClick = () => {
    setOffset(offset === 0 ? 80 : 0)
  }

  return (
    <div>
      <h1 style={{ transform: `translateX(${offset}px)`, transition: 'all 0.5s ease' }}>Slide</h1>
      <button onClick={handleButtonClick}>Move</button>
    </div>
  )
}

export default ContentView