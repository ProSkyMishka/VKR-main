import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView = () => {
  const [isOn, setIsOn] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <div>
          <input type="checkbox" checked={isOn} onChange={() => setIsOn(!isOn)} />
          <label>Enable</label>
        </div>
        <div>{isOn ? 'On' : 'Off'}</div>
      </div>
    </div>
  )
}

export default ContentView