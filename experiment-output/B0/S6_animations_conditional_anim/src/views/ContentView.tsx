import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [show, setShow] = useState(true)

  return (
    <div>
      <div>
        {show && (
          <div style={{ transition: 'opacity 0.3s ease-in-out' }}>
            <span>Visible</span>
          </div>
        )}
      </div>
      <button
        onClick={() => {
          setShow((prev) => !prev)
        }}
        style={{ transition: 'opacity 0.3s ease-in-out' }}
      >
        Toggle
      </button>
    </div>
  )
}

export default ContentView