import React from 'react'

interface ChildViewProps {
  isOn: boolean
  setIsOn: (value: boolean) => void
}

const ChildView: React.FC<ChildViewProps> = ({ isOn, setIsOn }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isOn}
          onChange={(e) => setIsOn(e.target.checked)}
        />
        Child
      </label>
    </div>
  )
}

export default ChildView