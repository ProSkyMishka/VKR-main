import React from 'react'

interface SwitchViewProps {
  on: boolean;
  onOnChange?: (value: boolean) => void;
}

const SwitchView: React.FC<SwitchViewProps> = ({ on, onOnChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onOnChange?.(event.target.checked)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <label>
        <input type="checkbox" checked={on} onChange={handleChange} />
        Switch
      </label>
    </div>
  )
}

export default SwitchView