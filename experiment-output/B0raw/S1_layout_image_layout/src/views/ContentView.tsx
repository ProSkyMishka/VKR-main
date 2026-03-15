import React from 'react'

function ContentView() {
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
      <p style={{ fontSize: '14px', marginTop: '8px' }}>Caption</p>
    </div>
  )
}

export default ContentView