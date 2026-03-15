import React from 'react'

interface SliderViewProps {
  value: number
  onValueChange: (newValue: number) => void
}

const SliderView: React.FC<SliderViewProps> = ({ value, onValueChange }) => {
  return (
    <div>
      <p>{value.toFixed(1)}</p>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onValueChange(parseFloat(e.target.value))}
      />
    </div>
  )
}

export default SliderView