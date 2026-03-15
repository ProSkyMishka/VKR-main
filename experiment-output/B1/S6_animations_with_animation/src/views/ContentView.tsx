import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [offset, setOffset] = useState<number>(0)

  const handleMove = () => {
    setOffset(offset === 0 ? 50 : 0)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span style={{ transform: `translateX(${offset}px)` }}>Slide</span>
        <button type="button" onClick={handleMove} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          Move
        </button>
      </div>
    </div>
  )
}

export default ContentView