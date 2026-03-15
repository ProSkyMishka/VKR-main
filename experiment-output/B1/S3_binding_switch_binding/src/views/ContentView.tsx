import React, { useState } from 'react'
import SwitchView from './SwitchView'

const ContentView = () => {
  const [on, setOn] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', padding: 16 }}>
        <SwitchView on={on} onOnChange={setOn} />
        <div>{on ? 'On' : 'Off'}</div>
      </div>
    </div>
  )
}

export default ContentView