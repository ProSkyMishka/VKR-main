import React, { useState } from 'react'

interface ChildViewProps {
  isOn: boolean
  onToggle: (value: boolean) => void
}

const ChildView: React.FC<ChildViewProps> = ({ isOn, onToggle }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isOn}
          onChange={(e) => onToggle(e.target.checked)}
        />
        Child
      </label>
    </div>
  )
}

export default function ParentView() {
  const [isOn, setIsOn] = useState(false)

  return (
    <div>
      <ChildView isOn={isOn} onToggle={setIsOn} />
      <p>Parent: {isOn ? 'On' : 'Off'}</p>
    </div>
  )
}