import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [down, setDown] = useState<number>(0)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span style={{ transform: `translateY(${down}px)` }}>Drop</span>
      <button onClick={() => setDown(50)}>Drop</button>
    </div>
  )
}

export default ContentView