import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <div>
        {visible && <span>Visible</span>}
        <button onClick={() => setVisible(!visible)}>Toggle</button>
      </div>
    </div>
  )
}

export default ContentView