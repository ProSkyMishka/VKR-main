import React from 'react'

interface ABViewProps {
  a: number
  b: number
  setA: (value: number) => void
  setB: (value: number) => void
}

const ABView: React.FC<ABViewProps> = ({ a, b, setA, setB }) => {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <button onClick={() => setA(a + 1)}>A</button>
      <button onClick={() => setB(b + 1)}>B</button>
    </div>
  )
}

export default ABView