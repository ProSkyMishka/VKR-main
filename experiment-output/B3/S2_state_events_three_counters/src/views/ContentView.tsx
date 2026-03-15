import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [a, setA] = useState<number>(0)
  const [b, setB] = useState<number>(0)
  const [c, setC] = useState<number>(0)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span>a:{a} b:{b} c:{c}</span>
        <button type="button" onClick={() => setA(a + 1)} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          A+
        </button>
        <button type="button" onClick={() => setB(b + 1)} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          B+
        </button>
        <button type="button" onClick={() => setC(c + 1)} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          C+
        </button>
      </div>
    </div>
  )
}

export default ContentView