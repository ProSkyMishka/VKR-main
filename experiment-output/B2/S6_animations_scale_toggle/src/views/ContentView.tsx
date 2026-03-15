import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [big, setBig] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
      <span style={{ transform: `scale(${big ? 2 : 1})`, transition: 'transform 0.3s ease-in-out' }}>Scale</span>
      <button onClick={() => setBig(!big)}>Toggle</button>
    </div>
  )
}