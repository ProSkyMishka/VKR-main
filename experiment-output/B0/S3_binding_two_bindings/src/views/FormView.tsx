import React, { Dispatch, SetStateAction } from 'react'

interface FormViewProps {
  a: string
  b: string
  setA: Dispatch<SetStateAction<string>>
  setB: Dispatch<SetStateAction<string>>
}

const FormView: React.FC<FormViewProps> = ({ a, b, setA, setB }) => {
  return (
    <div style={{ padding: '1rem' }}>
      <input
        type="text"
        placeholder="A"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        type="text"
        placeholder="B"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
    </div>
  )
}

export default FormView