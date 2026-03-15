import React from 'react'

const ContentView: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
      }}
    >
      <img
        src="logo"
        alt="logo"
        style={{
          width: '120px',
          height: '120px',
          objectFit: 'contain',
        }}
      />
      <span style={{ fontSize: '14px' }}>Caption</span>
    </div>
  )
}

export default ContentView