import React from 'react'

const ContentView: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
          <a href="#">
            <span>First</span>
          </a>
          <a href="#">
            <span>Second</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContentView