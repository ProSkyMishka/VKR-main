import React from 'react'

interface EditFieldProps {
  text: string;
  onTextChange?: (value: string) => void;
}

const EditField: React.FC<EditFieldProps> = ({ text, onTextChange }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => onTextChange?.(e.target.value)}
        style={{ padding: 8 }}
      />
    </div>
  )
}

export default EditField