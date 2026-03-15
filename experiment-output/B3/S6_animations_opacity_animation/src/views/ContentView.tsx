import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView = () => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span style={{ opacity: show ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>Fade</span>
        <button type="button" onClick={() => setShow(!show)} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          Toggle
        </button>
      </div>
    </div>
  )
}

export default ContentView