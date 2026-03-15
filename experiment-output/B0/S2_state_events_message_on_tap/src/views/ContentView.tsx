import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [msg, setMsg] = useState('Tap below')

  const handleButtonClick = () => {
    setMsg('Hi!')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ fontSize: '24px', marginBottom: '16px' }}>{msg}</div>
      <button style={{ padding: '8px 16px', fontSize: '16px' }} onClick={handleButtonClick}>
        Say Hi
      </button>
    </div>
  )
}

export default ContentView