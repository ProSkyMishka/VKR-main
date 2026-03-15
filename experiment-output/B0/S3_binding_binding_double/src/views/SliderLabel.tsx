import React, { useState } from 'react'

interface SliderLabelProps {
  value: number
  onChange: (value: number) => void
}

const SliderLabel: React.FC<SliderLabelProps> = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      <span>{value.toFixed(2)}</span>
    </div>
  )
}

export default SliderLabel