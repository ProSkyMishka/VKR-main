import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [a, setA] = useState(false)
  const [b, setB] = useState(false)

  return (
    <div style={{ padding: '1rem' }}>
      <div>
        <label>
          <input type="checkbox" checked={a} onChange={() => setA(!a)} /> A
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={b} onChange={() => setB(!b)} /> B
        </label>
      </div>
    </div>
  )
}

export default ContentView