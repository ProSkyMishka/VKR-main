import { useState } from 'react'

interface Row {
  id: string
  title: string
}

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const sectionA: Row[] = [
    { id: '1', title: 'A1' },
    { id: '2', title: 'A2' }
  ]
  const sectionB: Row[] = [
    { id: '3', title: 'B1' },
    { id: '4', title: 'B2' }
  ]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontWeight: 'bold' }}>Section A</div>
          {sectionA.map(row => (
            <div key={row.id}>{row.title}</div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontWeight: 'bold' }}>Section B</div>
          {sectionB.map(row => (
            <div key={row.id}>{row.title}</div>
          ))}
        </div>
      </div>
    </div>
  )
}