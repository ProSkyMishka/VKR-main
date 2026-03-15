import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [a, setA] = useState<boolean>(false)
  const [b, setB] = useState<boolean>(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', padding: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <input type="checkbox" checked={a} onChange={(e) => setA(e.target.checked)} />
        <span>A</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <input type="checkbox" checked={b} onChange={(e) => setB(e.target.checked)} />
        <span>B</span>
      </div>
    </div>
  )
}

export default ContentView