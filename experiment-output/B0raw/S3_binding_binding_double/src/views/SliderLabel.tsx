import React, { useState } from 'react'

interface SliderLabelProps {
  initialValue?: number
}

const SliderLabel: React.FC<SliderLabelProps> = ({ initialValue = 0.5 }) => {
  const [value, setValue] = useState<number>(initialValue)

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          style={{ width: '100%' }}
        />
        <span style={{ marginTop: '0.5rem' }}>{value.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default SliderLabel