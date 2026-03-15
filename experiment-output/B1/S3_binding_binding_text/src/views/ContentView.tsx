import React, { useState } from 'react'
import EditView from './EditView'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [name, setName] = useState<string>('')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <EditView text={name} onTextChange={setName} />
        <span>Hello, {name}</span>
      </div>
    </div>
  )
}

export default ContentView