import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [on, setOn] = useState(false)

  return (
    <>
      <p
        style={{
          opacity: on ? 1 : 0.5,
          transform: `scale(${on ? 1.2 : 1})`,
          transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
        }}
      >
        Combo
      </p>
      <button onClick={() => setOn((prev) => !prev)}>Toggle</button>
    </>
  )
}

export default ContentView