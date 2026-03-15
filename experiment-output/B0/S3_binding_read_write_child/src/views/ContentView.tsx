import React, { useState } from 'react'
import CounterChild from './CounterChild'

const ContentView: React.FC = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <CounterChild count={count} onIncrement={handleIncrement} />
    </div>
  )
}

export default ContentView