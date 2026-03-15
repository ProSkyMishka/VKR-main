import React, { useState } from 'react'

interface CheckViewProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

const CheckView: React.FC<CheckViewProps> = ({ checked, onCheckedChange }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheckedChange(e.target.checked)}
        />
        Check
      </label>
    </div>
  )
}

export default function CheckViewWrapper() {
  const [checked, setChecked] = useState(false)
  return <CheckView checked={checked} onCheckedChange={setChecked} />
}