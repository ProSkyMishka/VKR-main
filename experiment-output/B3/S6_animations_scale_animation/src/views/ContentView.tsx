import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [scaled, setScaled] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span style={{ transform: `scale(${scaled ? 1.5 : 1})`, transition: 'transform 0.3s ease' }}>Scale</span>
        <button type="button" onClick={() => setScaled(!scaled)} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          Toggle
        </button>
      </div>
    </div>
  )
}

export default ContentView