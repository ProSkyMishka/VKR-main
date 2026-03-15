import React, { useState } from 'react'
import SwitchView from './SwitchView'

const ContentView: React.FC = () => {
  const [on, setOn] = useState(false)

  return (
    <div style={{ padding: '1rem' }}>
      <SwitchView on={on} setOn={setOn} />
      <p>{on ? 'On' : 'Off'}</p>
    </div>
  )
}

export default ContentView