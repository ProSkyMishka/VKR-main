import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [down, setDown] = useState<number>(0)

  const handleDropButtonClick = () => {
    setDown(50)
  }

  return (
    <>
      <p style={{ transform: `translateY(${down}px)` }}>Drop</p>
      <button onClick={handleDropButtonClick}>Drop</button>
    </>
  )
}

export default ContentView