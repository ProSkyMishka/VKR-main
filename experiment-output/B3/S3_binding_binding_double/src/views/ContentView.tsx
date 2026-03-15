import React, { useState } from 'react'
import SliderLabel from './SliderLabel'

const ContentView: React.FC = () => {
  const [value, setValue] = useState<number>(0.5)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SliderLabel value={value} onValueChange={setValue} />
    </div>
  )
}

export default ContentView