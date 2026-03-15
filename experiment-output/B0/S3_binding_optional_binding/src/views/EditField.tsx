import React, { useState } from 'react'

interface EditFieldProps {
  text: string
  onTextChange: (newText: string) => void
}

const EditField: React.FC<EditFieldProps> = ({ text, onTextChange }) => {
  return (
    <input
      type="text"
      value={text}
      onChange={(e) => onTextChange(e.target.value)}
      style={{ padding: '8px' }}
    />
  )
}

export default EditField