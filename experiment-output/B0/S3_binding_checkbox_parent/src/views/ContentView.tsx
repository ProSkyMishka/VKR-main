import React, { useState } from 'react'
import CheckboxView from './CheckboxView'

const ContentView: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div style={{ padding: '1rem' }}>
      <CheckboxView isChecked={isChecked} setIsChecked={setIsChecked} />
    </div>
  )
}

export default ContentView