import React from 'react'

const ContentView: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <div>Left</div>
        <div>Center</div>
        <div>Right</div>
      </div>
    </div>
  )
}

export default ContentView