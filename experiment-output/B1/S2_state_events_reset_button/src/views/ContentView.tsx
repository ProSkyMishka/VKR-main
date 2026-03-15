import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView = () => {
  const [value, setValue] = useState<number>(0)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span>{value}</span>
        <button type="button" onClick={() => setValue(0)} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default ContentView