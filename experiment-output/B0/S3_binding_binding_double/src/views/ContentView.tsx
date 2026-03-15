import React, { useState } from 'react'
import SliderLabel from './SliderLabel'

const ContentView: React.FC = () => {
  const [value, setValue] = useState(0.5)

  return (
    <div style={{ padding: '1rem' }}>
      <SliderLabel value={value} onChange={setValue} />
    </div>
  )
}

export default ContentView