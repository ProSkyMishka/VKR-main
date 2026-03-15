import React from 'react'

interface CheckViewProps {
  checked: boolean
  onCheckedChange?: (value: boolean) => void
}

const CheckView: React.FC<CheckViewProps> = ({ checked, onCheckedChange }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
        />
        Check
      </label>
    </div>
  )
}

export default CheckView