import React from 'react'

interface CheckboxViewProps {
  isChecked: boolean
  onIsCheckedChange?: (value: boolean) => void
}

const CheckboxView: React.FC<CheckboxViewProps> = ({ isChecked, onIsCheckedChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onIsCheckedChange?.(e.target.checked)}
      />
      <label>Item</label>
    </div>
  )
}

export default CheckboxView