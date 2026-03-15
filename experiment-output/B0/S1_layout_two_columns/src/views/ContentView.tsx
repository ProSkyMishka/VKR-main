import React from 'react'

function ContentView() {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: 'flex', gap: 32 }}>
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