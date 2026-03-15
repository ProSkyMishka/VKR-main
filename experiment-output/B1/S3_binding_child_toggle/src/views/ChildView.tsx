import React from 'react'

interface ChildViewProps {
  isOn: boolean
  onIsOnChange?: (value: boolean) => void
}

const ChildView: React.FC<ChildViewProps> = ({ isOn, onIsOnChange }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <label>
        <input type="checkbox" checked={isOn} onChange={(e) => onIsOnChange?.(e.target.checked)} />
        Child
      </label>
    </div>
  )
}

export default ChildView