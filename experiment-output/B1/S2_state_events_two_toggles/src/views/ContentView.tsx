import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [a, setA] = useState<boolean>(false)
  const [b, setB] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', padding: 16 }}>
        <div>
          <label>
            <input type="checkbox" checked={a} onChange={(e) => setA(e.target.checked)} />
            A
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={b} onChange={(e) => setB(e.target.checked)} />
            B
          </label>
        </div>
      </div>
    </div>
  )
}

export default ContentView