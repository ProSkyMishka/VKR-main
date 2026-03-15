import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <div style={{ opacity: show ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
        Fade
      </div>
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  )
}

export default ContentView