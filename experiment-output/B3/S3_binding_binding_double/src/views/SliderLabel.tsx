import React from 'react'

interface SliderLabelProps {
  value: number;
  onValueChange?: (value: number) => void;
}

const SliderLabel: React.FC<SliderLabelProps> = ({ value, onValueChange }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={value}
        onChange={(e) => onValueChange?.(parseFloat(e.target.value))}
        style={{ width: '100%' }}
      />
      <span>{value.toFixed(2)}</span>
    </div>
  )
}

export default SliderLabel