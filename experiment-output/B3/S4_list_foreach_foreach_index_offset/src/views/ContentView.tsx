import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const count = 7

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {Array.from({ length: count }, (_, i) => (
          <li key={i}>
            <span>Row {i + 1}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}