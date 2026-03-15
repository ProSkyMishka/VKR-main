import React, { useState } from 'react'
import StepperView from './StepperView'

const ContentView: React.FC = () => {
  const [n, setN] = useState(0)

  return (
    <div style={{ padding: '1rem' }}>
      <StepperView n={n} setN={setN} />
    </div>
  )
}

export default ContentView