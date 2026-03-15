import React from 'react'

const ContentView: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center', padding: 16 }}>
        <div
          style={{
            width: 200,
            height: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255,165,0,0.3)',
            borderRadius: 8
          }}
        >
          <span style={{ fontSize: 18, color: '#808080' }}>Title</span>
        </div>
        <div
          style={{
            width: 200,
            height: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255,165,0,0.3)',
            borderRadius: 8
          }}
        >
          <span>Box</span>
        </div>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#FFA500', zIndex: 0 }} />
      </div>
    </div>
  )
}

export default ContentView