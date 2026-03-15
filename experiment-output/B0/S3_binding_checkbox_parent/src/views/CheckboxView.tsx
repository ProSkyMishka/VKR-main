import React, { Dispatch, SetStateAction } from 'react'

interface CheckboxViewProps {
  isChecked: boolean
  setIsChecked: Dispatch<SetStateAction<boolean>>
}

const CheckboxView: React.FC<CheckboxViewProps> = ({ isChecked, setIsChecked }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        Item
      </label>
    </div>
  )
}

export default CheckboxView