import React from 'react'

interface StepperViewProps {
  n: number
  setN: (value: number) => void
}

const StepperView: React.FC<StepperViewProps> = ({ n, setN }) => {
  return (
    <>
      <div>
        <button onClick={() => setN(n - 1)}>-</button>
        <span>{n}</span>
        <button onClick={() => setN(n + 1)}>+</button>
      </div>
    </>
  )
}

export default StepperView