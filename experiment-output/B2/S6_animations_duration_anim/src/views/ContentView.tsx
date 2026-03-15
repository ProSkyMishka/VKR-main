import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [opacity, setOpacity] = useState<number>(0.5)

  const handleChange = () => {
    setOpacity(opacity === 0.5 ? 1 : 0.5)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
      <span style={{ opacity }}>Duration</span>
      <button onClick={handleChange}>Change</button>
    </div>
  )
}

export default ContentView