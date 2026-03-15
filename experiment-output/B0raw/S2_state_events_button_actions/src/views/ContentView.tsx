import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [message, setMessage] = useState('Tap a button')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>{message}</div>
      <button onClick={() => setMessage('A')}>Action A</button>
      <button onClick={() => setMessage('B')}>Action B</button>
    </div>
  )
}

export default ContentView