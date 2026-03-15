import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <input
          type="checkbox"
          checked={isOn}
          onChange={() => setIsOn(!isOn)}
          style={{ marginRight: '0.5rem' }}
        />
        <label>Enable</label>
      </div>
      <div>{isOn ? 'On' : 'Off'}</div>
    </div>
  )
}

export default ContentView