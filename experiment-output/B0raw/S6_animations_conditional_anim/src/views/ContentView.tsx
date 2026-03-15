import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [show, setShow] = useState(true)

  return (
    <div>
      <div>
        {show && <div>Visible</div>}
        <button
          onClick={() => {
            setShow((prev) => !prev)
          }}
        >
          Toggle
        </button>
      </div>
    </div>
  )
}

export default ContentView