import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [value, setValue] = useState(0)

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(0)}>Reset</button>
    </div>
  )
}

export default ContentView