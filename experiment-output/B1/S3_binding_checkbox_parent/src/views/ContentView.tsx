import React, { useState } from 'react'
import CheckboxView from './CheckboxView'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CheckboxView isChecked={isChecked} onIsCheckedChange={setIsChecked} />
    </div>
  )
}

export default ContentView