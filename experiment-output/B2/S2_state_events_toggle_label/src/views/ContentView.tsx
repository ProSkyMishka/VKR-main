import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [enabled, setEnabled] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
          <span>{enabled ? 'On' : 'Off'}</span>
        </div>
      </div>
    </div>
  )
}