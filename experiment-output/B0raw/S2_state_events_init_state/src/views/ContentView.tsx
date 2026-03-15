import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [x, setX] = useState(5)

  return (
    <div>
      <p>Value: {x}</p>
      <button onClick={() => setX(x * 2)}>Double</button>
    </div>
  )
}

export default ContentView