import React, { useState } from 'react'
import MiddleView from './MiddleView'

const ContentView: React.FC = () => {
  const [x, setX] = useState(0)

  return (
    <div>
      <p>{x}</p>
      <MiddleView x={x} setX={setX} />
    </div>
  )
}

export default ContentView