import React, { useState } from 'react'

interface ABViewProps {
  a: number
  b: number
  setA: (value: number) => void
  setB: (value: number) => void
}

const ABView: React.FC<ABViewProps> = ({ a, b, setA, setB }) => {
  return (
    <div>
      <div>a={a} b={b}</div>
      <div>
        <button onClick={() => setA(a + 1)}>A</button>
        <button onClick={() => setB(b + 1)}>B</button>
      </div>
    </div>
  )
}

const ABViewContainer: React.FC = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  return <ABView a={a} b={b} setA={setA} setB={setB} />
}

export default ABViewContainer