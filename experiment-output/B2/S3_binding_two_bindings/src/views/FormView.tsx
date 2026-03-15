import React from 'react'

interface FormViewProps {
  a: string
  onAChange?: (value: string) => void
  b: string
  onBChange?: (value: string) => void
}

const FormView: React.FC<FormViewProps> = ({ a, onAChange, b, onBChange }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', padding: 16 }}>
      <input
        type="text"
        placeholder="A"
        value={a}
        onChange={(e) => onAChange?.(e.target.value)}
        style={{ width: '100%' }}
      />
      <input
        type="text"
        placeholder="B"
        value={b}
        onChange={(e) => onBChange?.(e.target.value)}
        style={{ width: '100%' }}
      />
    </div>
  )
}

export default FormView