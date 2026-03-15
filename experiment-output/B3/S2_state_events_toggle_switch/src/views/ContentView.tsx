import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [isOn, setIsOn] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input type="checkbox" checked={isOn} onChange={() => setIsOn(!isOn)} />
          <span>Enable</span>
        </div>
        <span>{isOn ? 'On' : 'Off'}</span>
      </div>
    </div>
  )
}

export default ContentView