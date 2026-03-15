import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <div>
        {visible && <div>Visible</div>}
        <button onClick={() => setVisible((prev) => !prev)}>Toggle</button>
      </div>
    </div>
  )
}

export default ContentView