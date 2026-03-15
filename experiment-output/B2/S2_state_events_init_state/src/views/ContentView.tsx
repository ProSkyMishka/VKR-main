import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [x, setX] = useState<number>(5)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span>Value: {x}</span>
        <button type="button" onClick={() => setX(x * 2)} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          Double
        </button>
      </div>
    </div>
  )
}