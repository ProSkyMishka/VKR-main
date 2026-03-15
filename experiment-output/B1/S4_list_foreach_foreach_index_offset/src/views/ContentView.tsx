import React, { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [count] = useState(7)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {Array.from({ length: count }, (_, i) => (
          <li key={i}>Row {i + 1}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView