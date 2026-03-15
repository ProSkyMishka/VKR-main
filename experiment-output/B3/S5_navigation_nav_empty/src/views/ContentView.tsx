import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <span>Empty nav</span>
      </div>
    </div>
  )
}

export default ContentView