import React, { useState } from 'react'
import ChildView from './ChildView'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span>{count}</span>
        <ChildView count={count} onCountChange={setCount} />
      </div>
    </div>
  )
}

export default ContentView