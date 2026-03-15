import React from 'react'

interface ChildViewProps {
  isOn: boolean;
  onIsOnChange?: (value: boolean) => void;
}

const ChildView = ({ isOn, onIsOnChange }: ChildViewProps) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <input type="checkbox" checked={isOn} onChange={(e) => onIsOnChange?.(e.target.checked)} />
        <span>Child</span>
      </div>
    </div>
  )
}

export default ChildView