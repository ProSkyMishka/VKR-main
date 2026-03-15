import React from 'react'

const ContentView: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <span>Line 1</span>
        </div>
        <div>
          <span>Line 2</span>
        </div>
      </div>
    </div>
  )
}

export default ContentView