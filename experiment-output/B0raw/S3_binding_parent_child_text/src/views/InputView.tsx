import React, { useState } from 'react'

interface InputViewProps {
  value: string
  onChange: (newValue: string) => void
}

const InputView: React.FC<InputViewProps> = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: '8px' }}
      />
      <p>You wrote: {value}</p>
    </div>
  )
}

export default InputView