import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView = () => {
  const [name, setName] = useState<string>("World")

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span>Hello, {name}</span>
        <button type="button" onClick={() => setName("Swift")} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          Change
        </button>
      </div>
    </div>
  )
}

export default ContentView