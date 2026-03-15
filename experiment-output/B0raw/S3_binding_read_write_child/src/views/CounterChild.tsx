import React, { useState } from 'react'

interface CounterChildProps {
  initialCount?: number
}

const CounterChild: React.FC<CounterChildProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount)

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default CounterChild