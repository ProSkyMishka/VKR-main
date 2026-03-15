import React, { useState } from 'react'
import CheckboxView from './CheckboxView'

const ContentView: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CheckboxView isChecked={isChecked} onIsCheckedChange={setIsChecked} />
    </div>
  )
}

export default ContentView