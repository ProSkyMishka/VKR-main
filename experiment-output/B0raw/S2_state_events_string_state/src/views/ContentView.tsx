import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [name, setName] = useState('World')

  return (
    <div>
      <h1>Hello, {name}</h1>
      <button onClick={() => setName('Swift')}>Change</button>
    </div>
  )
}

export default ContentView