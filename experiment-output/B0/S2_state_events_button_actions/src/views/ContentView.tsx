import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [message, setMessage] = useState('Tap a button')

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '16px',
      }}
    >
      <div>{message}</div>
      <button
        onClick={() => setMessage('A')}
        style={{
          padding: '8px 16px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Action A
      </button>
      <button
        onClick={() => setMessage('B')}
        style={{
          padding: '8px 16px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Action B
      </button>
    </div>
  )
}

export default ContentView