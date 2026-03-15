import React, { useState } from 'react'

interface ChildViewProps {
  count: number
  onIncrement: () => void
}

const ChildView: React.FC<ChildViewProps> = ({ count, onIncrement }) => {
  return (
    <button onClick={onIncrement}>Child +1</button>
  )
}

const ContentView: React.FC = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>{count}</p>
      <ChildView count={count} onIncrement={handleIncrement} />
    </div>
  )
}

export default ContentView