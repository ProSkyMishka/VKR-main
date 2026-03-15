import React, { useState } from 'react'
import SwitchView from './SwitchView'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [on, setOn] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', padding: 16 }}>
        <SwitchView on={on} onOnChange={setOn} />
        <span>{on ? 'On' : 'Off'}</span>
      </div>
    </div>
  )
}

export default ContentView