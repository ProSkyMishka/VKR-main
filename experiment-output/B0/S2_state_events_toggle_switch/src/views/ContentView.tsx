import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isOn}
            onChange={() => setIsOn(!isOn)}
          />
          Enable
        </label>
      </div>
      <div>{isOn ? 'On' : 'Off'}</div>
    </div>
  )
}

export default ContentView