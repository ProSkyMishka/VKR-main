import React from 'react'

interface CounterChildProps {
  count: number
  onIncrement: () => void
}

const CounterChild: React.FC<CounterChildProps> = ({ count, onIncrement }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={onIncrement}>+</button>
    </div>
  )
}

export default CounterChild