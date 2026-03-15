import React, { useState } from 'react'
import FormView from './FormView'

const ContentView: React.FC = () => {
  const [a, setA] = useState('')
  const [b, setB] = useState('')

  return (
    <div>
      <FormView a={a} b={b} setA={setA} setB={setB} />
    </div>
  )
}

export default ContentView