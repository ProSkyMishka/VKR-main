import React from 'react'

interface SwitchViewProps {
  on: boolean
  onOnChange?: (value: boolean) => void
}

const SwitchView = ({ on, onOnChange }: SwitchViewProps) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <label>
        <input
          type="checkbox"
          checked={on}
          onChange={(e) => onOnChange?.(e.target.checked)}
        />
        Switch
      </label>
    </div>
  )
}

export default SwitchView