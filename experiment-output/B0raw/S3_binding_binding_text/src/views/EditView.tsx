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

const ContentView: React.FC = () => {
  const [name, setName] = useState('')

  return (
    <div>
      <EditView text={name} onTextChange={setName} />
      <p>Hello, {name}</p>
    </div>
  )
}

export default ContentView