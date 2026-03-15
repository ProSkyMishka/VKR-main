import React from 'react'

interface EditFieldProps {
  text: string;
  onTextChange?: (value: string) => void;
}

const EditField: React.FC<EditFieldProps> = ({ text, onTextChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTextChange?.(event.target.value)
  }

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      style={{ padding: 8 }}
    />
  )
}

export default EditField