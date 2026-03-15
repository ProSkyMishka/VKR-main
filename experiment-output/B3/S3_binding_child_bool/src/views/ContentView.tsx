import React, { useState } from 'react'
import CheckView from './CheckView'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CheckView checked={checked} onCheckedChange={setChecked} />
    </div>
  )
}

export default ContentView