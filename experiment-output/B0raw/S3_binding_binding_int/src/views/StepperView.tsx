import React, { useState } from 'react'

interface StepperViewProps {
  n: number
  setN: (value: number) => void
}

const StepperView: React.FC<StepperViewProps> = ({ n, setN }) => {
  return (
    <div>
      <div>
        <button onClick={() => setN(n - 1)}>-</button>
        <span>{n}</span>
        <button onClick={() => setN(n + 1)}>+</button>
      </div>
    </div>
  )
}

const ContentView: React.FC = () => {
  const [n, setN] = useState(0)

  return (
    <div>
      <StepperView n={n} setN={setN} />
    </div>
  )
}

export default ContentView