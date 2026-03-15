import React, { useState } from 'react'
import InputView from './InputView'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [value, setValue] = useState<string>('')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <InputView value={value} onValueChange={setValue} />
        <span>You wrote: {value}</span>
      </div>
    </div>
  )
}

export default ContentView