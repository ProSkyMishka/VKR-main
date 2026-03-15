import React, { useState } from 'react'
import InnerView from './InnerView'
import MiddleView from './MiddleView'

const ContentView = () => {
  const [x, setX] = useState<number>(0)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span>{x}</span>
        <MiddleView x={x} onXChange={setX} />
      </div>
    </div>
  )
}

export default ContentView