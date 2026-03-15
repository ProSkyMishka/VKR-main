import React, { useState } from 'react'
import StepperView from './StepperView'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [n, setN] = useState<number>(0)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <StepperView n={n} onNChange={setN} />
    </div>
  )
}

export default ContentView