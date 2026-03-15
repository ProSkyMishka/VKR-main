import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView = () => {
  const [opacity, setOpacity] = useState<number>(0.5)

  const handleButtonClick = () => {
    setOpacity(opacity === 0.5 ? 1 : 0.5)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span style={{ opacity: opacity }}>Duration</span>
      <button onClick={handleButtonClick}>Change</button>
    </div>
  )
}

export default ContentView