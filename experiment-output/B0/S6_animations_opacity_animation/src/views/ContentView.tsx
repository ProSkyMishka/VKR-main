import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <h1 style={{ opacity: show ? 1 : 0, animation: 'easeInOut' }}>Fade</h1>
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  )
}

export default ContentView