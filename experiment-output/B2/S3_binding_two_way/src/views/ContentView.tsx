import React, { useState } from 'react'
import SliderView from './SliderView'

const ContentView = () => {
  const [value, setValue] = useState<number>(50)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SliderView value={value} onValueChange={setValue} />
    </div>
  )
}

export default ContentView