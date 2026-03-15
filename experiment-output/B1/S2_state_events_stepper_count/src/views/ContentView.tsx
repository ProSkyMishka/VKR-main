import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [value, setValue] = useState<number>(0)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', padding: 16 }}>
        <span>{value}</span>
        <button onClick={() => setValue(value + 1)}>Step</button>
      </div>
    </div>
  )
}