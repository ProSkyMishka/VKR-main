import React, { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [enabled, setEnabled] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <div>
          <input type="checkbox" checked={enabled} onChange={() => setEnabled(!enabled)} />
          <span>{enabled ? 'On' : 'Off'}</span>
        </div>
      </div>
    </div>
  )
}

export default ContentView