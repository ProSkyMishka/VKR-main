import React from 'react'

interface InputViewProps {
  value: string;
  onValueChange?: (value: string) => void;
}

const InputView = ({ value, onValueChange }: InputViewProps) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Enter"
        value={value}
        onChange={(e) => onValueChange?.(e.target.value)}
        style={{ padding: 8 }}
      />
    </div>
  )
}

export default InputView