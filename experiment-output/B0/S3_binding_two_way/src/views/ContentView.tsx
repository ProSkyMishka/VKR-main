import React, { useState } from 'react'
import SliderView from './SliderView'

const ContentView: React.FC = () => {
  const [value, setValue] = useState(50.0)

  return (
    <div>
      <SliderView value={value} onValueChange={setValue} />
    </div>
  )
}

export default ContentView