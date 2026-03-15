import React from 'react'

const ContentView: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        <span style={{ color: '#FF0000' }}>R</span>
        <span style={{ color: '#00FF00' }}>G</span>
        <span style={{ color: '#0000FF' }}>B</span>
      </div>
    </div>
  )
}

export default ContentView