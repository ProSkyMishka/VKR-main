import React from 'react'

interface StepperViewProps {
  n: number
  onNChange?: (value: number) => void
}

const StepperView: React.FC<StepperViewProps> = ({ n, onNChange }) => {
  const handleStepperChange = (value: number) => {
    if (onNChange) {
      onNChange(value)
    }
  }

  return (
    <div>
      <div>
        <span>N</span>
        <input
          type="number"
          value={n}
          onChange={(e) => handleStepperChange(parseInt(e.target.value))}
          min={0}
          max={100}
        />
      </div>
      <div>{n}</div>
    </div>
  )
}

export default StepperView