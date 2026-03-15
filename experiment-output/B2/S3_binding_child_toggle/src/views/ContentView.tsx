import React, { useState } from 'react'
import ChildView from './ChildView'

const ContentView = () => {
  const [isOn, setIsOn] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <ChildView isOn={isOn} onIsOnChange={setIsOn} />
        <span>Parent: {isOn ? 'On' : 'Off'}</span>
      </div>
    </div>
  )
}

export default ContentView