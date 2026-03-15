import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [value, setValue] = useState(0)

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ fontSize: '2rem' }}>{value}</div>
      <button
        style={{ marginRight: '0.5rem' }}
        onClick={() => setValue(value - 1)}
      >
        -
      </button>
      <button
        style={{ marginRight: '0.5rem' }}
        onClick={() => setValue(value + 1)}
      >
        +
      </button>
    </div>
  )
}

export default ContentView