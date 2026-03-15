import React, { useState } from 'react'

interface SwitchViewProps {
  on: boolean
  setOn: (value: boolean) => void
}

const SwitchView: React.FC<SwitchViewProps> = ({ on, setOn }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={on}
          onChange={(e) => setOn(e.target.checked)}
        />
        Switch
      </label>
      <p>{on ? 'On' : 'Off'}</p>
    </div>
  )
}

const ContentView: React.FC = () => {
  const [on, setOn] = useState(false)

  return (
    <div style={{ padding: '1rem' }}>
      <SwitchView on={on} setOn={setOn} />
    </div>
  )
}

export default ContentView