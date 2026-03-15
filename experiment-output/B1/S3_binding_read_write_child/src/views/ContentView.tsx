import React, { useState } from 'react'
import CounterChild from './CounterChild'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CounterChild count={count} onCountChange={setCount} />
    </div>
  )
}

export default ContentView