import React, { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ border: '1px solid #ccc', padding: 16 }}>
        <div style={{ marginBottom: 8 }}>
          <span>Row 1</span>
        </div>
        <div style={{ marginBottom: 8 }}>
          <span>Row 2</span>
        </div>
      </div>
    </div>
  )
}