import React, { useState } from 'react'
import ChildView from './ChildView'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [isOn, setIsOn] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <ChildView isOn={isOn} onIsOnChange={setIsOn} />
        <div>Parent: {isOn ? 'On' : 'Off'}</div>
      </div>
    </div>
  )
}

export default ContentView