import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <h1 style={{ fontSize: 32 }}>Count: {count}</h1>
      <button
        style={{ padding: '10px 20px', fontSize: 16, backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: 4 }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  )
}

export default ContentView