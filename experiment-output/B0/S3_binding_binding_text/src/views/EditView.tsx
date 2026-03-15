import React, { useState } from 'react'

interface EditViewProps {
  text: string
  onTextChange: (newText: string) => void
}

const EditView: React.FC<EditViewProps> = ({ text, onTextChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        style={{ padding: '8px' }}
      />
    </div>
  )
}

export default EditView