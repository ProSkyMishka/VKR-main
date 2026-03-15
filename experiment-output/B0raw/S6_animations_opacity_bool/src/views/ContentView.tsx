import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease-out' }}>
        Hi
      </div>
      <button onClick={() => setVisible((prev) => !prev)}>Hide/Show</button>
    </div>
  )
}

export default ContentView