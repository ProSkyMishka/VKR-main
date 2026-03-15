import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [opacity, setOpacity] = useState<number>(0.5)

  const handleButtonClick = () => {
    setOpacity(opacity === 0.5 ? 1 : 0.5)
  }

  return (
    <>
      <p style={{ opacity }}>Duration</p>
      <button onClick={handleButtonClick}>Change</button>
    </>
  )
}

export default ContentView