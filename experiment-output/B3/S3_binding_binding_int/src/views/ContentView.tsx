import React, { useState } from 'react'
import StepperView from './StepperView'

const ContentView: React.FC = () => {
  const [n, setN] = useState<number>(0)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <StepperView n={n} onNChange={setN} />
    </div>
  )
}

export default ContentView