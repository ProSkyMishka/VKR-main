import React, { useState } from 'react'
import ChildView from './ChildView'

const ContentView: React.FC = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <div>
      <ChildView isOn={isOn} setIsOn={setIsOn} />
      <p>Parent: {isOn ? 'On' : 'Off'}</p>
    </div>
  )
}

export default ContentView