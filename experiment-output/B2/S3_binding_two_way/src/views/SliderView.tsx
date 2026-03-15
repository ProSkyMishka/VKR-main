import React from 'react'

interface SliderViewProps {
  value: number;
  onValueChange?: (value: number) => void;
}

const SliderView: React.FC<SliderViewProps> = ({ value, onValueChange }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
      <span>{value.toFixed(1)}</span>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onValueChange?.(parseFloat(e.target.value))}
        style={{ width: '100%' }}
      />
    </div>
  )
}

export default SliderView