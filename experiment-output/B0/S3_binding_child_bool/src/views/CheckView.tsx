import React, { useState } from 'react'

interface CheckViewProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

const CheckView: React.FC<CheckViewProps> = ({ checked, onCheckedChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
      />
      Check
    </label>
  )
}

export default CheckView