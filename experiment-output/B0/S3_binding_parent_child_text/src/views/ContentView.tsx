import React, { useState } from 'react'
import InputView from './InputView'

const ContentView: React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
      <InputView value={value} onChange={setValue} />
      <p>You wrote: {value}</p>
    </div>
  )
}

export default ContentView