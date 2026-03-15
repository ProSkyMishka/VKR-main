import React, { useState } from 'react'
import CheckView from './CheckView'

const ContentView: React.FC = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <CheckView checked={checked} onCheckedChange={setChecked} />
    </div>
  )
}

export default ContentView