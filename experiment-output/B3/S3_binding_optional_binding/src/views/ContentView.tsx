import React, { useState } from 'react'
import EditField from './EditField'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [text, setText] = useState<string>('Edit me')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <EditField text={text} onTextChange={setText} />
        <span>Length: {text.length}</span>
      </div>
    </div>
  )
}

export default ContentView