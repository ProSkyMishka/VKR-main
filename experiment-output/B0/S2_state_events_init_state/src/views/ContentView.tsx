import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [x, setX] = useState(5)

  return (
    <div>
      <div>Value: {x}</div>
      <button onClick={() => setX(x * 2)}>Double</button>
    </div>
  )
}

export default ContentView