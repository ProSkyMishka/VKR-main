import React from 'react'

interface CheckViewProps {
  checked: boolean
  onCheckedChange?: (value: boolean) => void
}

const CheckView: React.FC<CheckViewProps> = ({ checked, onCheckedChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
      />
      <label>Check</label>
    </div>
  )
}

export default CheckView