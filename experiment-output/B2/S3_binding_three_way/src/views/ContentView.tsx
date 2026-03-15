import React, { useState } from 'react'
import ABView from './ABView'

const ContentView = () => {
  const [a, setA] = useState<number>(0)
  const [b, setB] = useState<number>(0)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span>a={a} b={b}</span>
        <ABView a={a} onAChange={setA} b={b} onBChange={setB} />
      </div>
    </div>
  )
}

export default ContentView