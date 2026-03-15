import React, { useState } from 'react'

interface Row {
  id: string
  title: string
}

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const sectionA: Row[] = [
    { id: '1', title: 'A1' },
    { id: '2', title: 'A2' },
  ]
  const sectionB: Row[] = [
    { id: '3', title: 'B1' },
    { id: '4', title: 'B2' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3>Section A</h3>
        {sectionA.map((row) => (
          <span key={row.id}>{row.title}</span>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3>Section B</h3>
        {sectionB.map((row) => (
          <span key={row.id}>{row.title}</span>
        ))}
      </div>
    </div>
  )
}

export default ContentView