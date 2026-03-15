import React, { useState } from 'react'
import EditField from './EditField'

const ContentView: React.FC = () => {
  const [text, setText] = useState('Edit me')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
      <EditField text={text} onTextChange={setText} />
      <div>Length: {text.length}</div>
    </div>
  )
}

export default ContentView