import React, { useState } from 'react'

interface InnerViewProps {
  x: number
  onIncrement: () => void
}

const InnerView: React.FC<InnerViewProps> = ({ x, onIncrement }) => {
  return (
    <button onClick={onIncrement}>Inner</button>
  )
}

const MiddleView: React.FC<InnerViewProps> = ({ x, onIncrement }) => {
  return (
    <InnerView x={x} onIncrement={onIncrement} />
  )
}

const ContentView: React.FC = () => {
  const [x, setX] = useState(0)

  const handleIncrement = () => {
    setX(x + 1)
  }

  return (
    <div>
      <p>{x}</p>
      <MiddleView x={x} onIncrement={handleIncrement} />
    </div>
  )
}

export default ContentView