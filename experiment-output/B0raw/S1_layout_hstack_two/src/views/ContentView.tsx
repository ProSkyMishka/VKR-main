import React from 'react'

const ContentView: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '1rem' }}>Left</div>
        <div>Right</div>
      </div>
    </div>
  )
}

export default ContentView