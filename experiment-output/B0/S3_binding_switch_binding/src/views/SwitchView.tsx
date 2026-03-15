import React from 'react'

interface SwitchViewProps {
  on: boolean
  setOn: (value: boolean) => void
}

const SwitchView: React.FC<SwitchViewProps> = ({ on, setOn }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={on}
        onChange={(e) => setOn(e.target.checked)}
      />
      Switch
    </label>
  )
}

export default SwitchView