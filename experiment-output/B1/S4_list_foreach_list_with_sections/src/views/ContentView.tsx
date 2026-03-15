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
    <div>
      <div>
        <h2>Section A</h2>
        {sectionA.map((row) => (
          <div key={row.id}>{row.title}</div>
        ))}
      </div>
      <div>
        <h2>Section B</h2>
        {sectionB.map((row) => (
          <div key={row.id}>{row.title}</div>
        ))}
      </div>
    </div>
  )
}

export default ContentView