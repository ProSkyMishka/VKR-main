import React, { useState } from 'react'
import SliderLabel from './SliderLabel'

const ContentView: React.FC = () => {
  const [value, setValue] = useState<number>(0.5)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <SliderLabel value={value} onValueChange={setValue} />
      </div>
    </div>
  )
}

export default ContentView