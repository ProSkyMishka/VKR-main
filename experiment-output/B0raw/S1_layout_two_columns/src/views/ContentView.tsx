import React from 'react'

const ContentView: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>Col1-A</div>
          <div>Col1-B</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>Col2-A</div>
          <div>Col2-B</div>
        </div>
      </div>
    </div>
  )
}

export default ContentView