import React from 'react'

interface StepperViewProps {
  n: number
  onNChange?: (value: number) => void
}

const StepperView: React.FC<StepperViewProps> = ({ n, onNChange }) => {
  const handleStepperChange = (value: number) => {
    onNChange?.(value)
  }

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={n}
        onChange={(e) => handleStepperChange(parseInt(e.target.value))}
      />
      <span>{n}</span>
    </div>
  )
}

export default StepperView