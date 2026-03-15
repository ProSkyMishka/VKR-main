import React from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <span>Row 1</span>
        <span>Row 2</span>
      </div>
    </div>
  )
}

export default ContentView