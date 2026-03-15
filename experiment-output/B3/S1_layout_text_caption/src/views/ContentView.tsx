import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span style={{ color: 'var(--color-secondary, #333)' }}>Title</span>
        <span style={{ color: 'var(--color-secondary, #333)', fontSize: 14 }}>Caption</span>
      </div>
    </div>
  )
}