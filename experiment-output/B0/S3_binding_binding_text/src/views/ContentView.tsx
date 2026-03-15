import React, { useState } from 'react'
import EditView from './EditView'

const ContentView: React.FC = () => {
  const [name, setName] = useState('')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
      <EditView text={name} onTextChange={setName} />
      <div style={{ marginTop: '16px' }}>Hello, {name}</div>
    </div>
  )
}

export default ContentView