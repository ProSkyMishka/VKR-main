import React, { useState } from 'react'
import FormView from './FormView'

const ContentView: React.FC = () => {
  const [a, setA] = useState<string>('')
  const [b, setB] = useState<string>('')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <FormView a={a} onAChange={setA} b={b} onBChange={setB} />
    </div>
  )
}

export default ContentView