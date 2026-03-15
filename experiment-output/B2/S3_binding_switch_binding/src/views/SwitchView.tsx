import React from 'react'

interface SwitchViewProps {
  on: boolean;
  onOnChange?: (value: boolean) => void;
}

const SwitchView: React.FC<SwitchViewProps> = ({ on, onOnChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onOnChange?.(e.target.checked)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <input type="checkbox" checked={on} onChange={handleChange} />
        <span>Switch</span>
      </label>
    </div>
  )
}

export default SwitchView