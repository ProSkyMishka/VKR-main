import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <span>Root screen</span>
      </div>
    </div>
  )
}