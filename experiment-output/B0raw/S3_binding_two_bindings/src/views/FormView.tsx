import React, { useState } from 'react'

interface FormViewProps {
  a: string
  b: string
  setA: (value: string) => void
  setB: (value: string) => void
}

const FormView: React.FC<FormViewProps> = ({ a, b, setA, setB }) => {
  return (
    <div style={{ padding: '1rem' }}>
      <div>
        <input
          type="text"
          placeholder="A"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="B"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
    </div>
  )
}

const ContentView: React.FC = () => {
  const [a, setA] = useState('')
  const [b, setB] = useState('')

  return <FormView a={a} b={b} setA={setA} setB={setB} />
}

export default ContentView