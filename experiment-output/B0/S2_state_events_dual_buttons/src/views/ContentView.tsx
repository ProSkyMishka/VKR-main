import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  )
}

export default ContentView