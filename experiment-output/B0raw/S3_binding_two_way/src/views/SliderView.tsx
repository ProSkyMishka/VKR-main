import React, { useState } from 'react'

interface SliderViewProps {
  value: number
  onChange: (value: number) => void
}

const SliderView: React.FC<SliderViewProps> = ({ value, onChange }) => {
  return (
    <div>
      <p>{value.toFixed(1)}</p>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </div>
  )
}

const ContentView: React.FC = () => {
  const [value, setValue] = useState(50)

  return <SliderView value={value} onChange={setValue} />
}

export default ContentView