import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [visible, setVisible] = useState<boolean>(true)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease-out' }}>Hi</span>
        <button type="button" onClick={() => setVisible(v => !v)} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          Hide/Show
        </button>
      </div>
    </div>
  )
}

export default ContentView