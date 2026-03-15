import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        {visible && <span>Hello</span>}
        <button type="button" onClick={() => setVisible(prev => !prev)} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          Toggle
        </button>
      </div>
    </div>
  )
}

export default ContentView