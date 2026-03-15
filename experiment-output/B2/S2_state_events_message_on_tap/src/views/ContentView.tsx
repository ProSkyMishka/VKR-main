import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [msg, setMsg] = useState<string>('Tap below')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span>{msg}</span>
        <button type="button" onClick={() => setMsg('Hi!')} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          Say Hi
        </button>
      </div>
    </div>
  )
}