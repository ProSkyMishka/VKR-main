import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [show, setShow] = useState<boolean>(true)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        {show && <span>Visible</span>}
        <button type="button" onClick={() => setShow(prev => !prev)} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          Toggle
        </button>
      </div>
    </div>
  )
}