import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      {visible && (
        <div>
          <h1>Hello</h1>
        </div>
      )}
      <button
        onClick={() => {
          setVisible((prev) => !prev)
        }}
      >
        Toggle
      </button>
    </div>
  )
}

export default ContentView