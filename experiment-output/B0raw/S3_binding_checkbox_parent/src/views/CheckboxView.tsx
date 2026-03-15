import React, { useState } from 'react'

interface CheckboxViewProps {
  isChecked: boolean
  onCheckedChange: (checked: boolean) => void
}

const CheckboxView: React.FC<CheckboxViewProps> = ({ isChecked, onCheckedChange }) => {
  return (
    <div style={{ padding: '16px' }}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onCheckedChange(e.target.checked)}
        />
        Item
      </label>
    </div>
  )
}

const ContentView: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <CheckboxView isChecked={isChecked} onCheckedChange={setIsChecked} />
  )
}

export default ContentView