import React, { useState } from 'react'

interface EditFieldProps {
  initialText?: string
}

const EditField: React.FC<EditFieldProps> = ({ initialText = 'Edit me' }) => {
  const [text, setText] = useState(initialText)

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '8px' }}
      />
      <p>Length: {text.length}</p>
    </div>
  )
}

export default EditField