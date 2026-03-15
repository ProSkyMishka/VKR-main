import React from 'react'

interface EditFieldProps {
  text: string;
  onTextChange?: (value: string) => void;
}

const EditField: React.FC<EditFieldProps> = ({ text, onTextChange }) => {
  return (
    <div style={{ padding: 8, border: '1px solid #ccc', borderRadius: 4 }}>
      <input
        type="text"
        value={text}
        onChange={(e) => onTextChange?.(e.target.value)}
        placeholder=""
        style={{ border: 'none', outline: 'none', width: '100%' }}
      />
    </div>
  )
}

export default EditField