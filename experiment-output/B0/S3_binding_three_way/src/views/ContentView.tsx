import React, { useState } from 'react'
import ABView from './ABView'

const ContentView: React.FC = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>a={a} b={b}</div>
      <ABView a={a} b={b} setA={setA} setB={setB} />
    </div>
  )
}

export default ContentView