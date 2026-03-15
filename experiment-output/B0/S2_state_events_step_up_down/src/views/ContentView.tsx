import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [step, setStep] = useState(0)

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={() => setStep(step - 1)}>-</button>
        <div>{step}</div>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
    </div>
  )
}

export default ContentView