import React from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 16, border: '1px solid #ccc', borderRadius: 8 }}>
          <span>Row 1</span>
          <span>Row 2</span>
        </div>
      </div>
    </div>
  )
}

export default ContentView