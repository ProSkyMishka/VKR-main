import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [n, setN] = useState(0)

  return (
    <div>
      <h1>{n}</h1>
      <button
        onClick={() => {
          if (n < 10) {
            setN(n + 1)
          }
        }}
      >
        +1
      </button>
    </div>
  )
}

export default ContentView