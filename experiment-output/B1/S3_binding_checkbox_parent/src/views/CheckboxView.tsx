import React from 'react'

interface CheckboxViewProps {
  isChecked: boolean
  onIsCheckedChange?: (value: boolean) => void
}

const CheckboxView: React.FC<CheckboxViewProps> = ({ isChecked, onIsCheckedChange }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onIsCheckedChange?.(e.target.checked)}
        />
        Item
      </label>
    </div>
  )
}

export default CheckboxView