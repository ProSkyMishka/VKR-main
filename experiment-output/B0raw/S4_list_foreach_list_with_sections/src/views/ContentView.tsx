import React, { useState } from 'react'

interface Row {
  id: string
  title: string
}

const ContentView: React.FC = () => {
  const [sectionA, setSectionA] = useState<Row[]>([
    { id: '1', title: 'A1' },
    { id: '2', title: 'A2' },
  ])
  const [sectionB, setSectionB] = useState<Row[]>([
    { id: '1', title: 'B1' },
    { id: '2', title: 'B2' },
  ])

  return (
    <div>
      <h1>Content View</h1>
      <div>
        <h2>Section A</h2>
        <ul>
          {sectionA.map((row) => (
            <li key={row.id}>{row.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Section B</h2>
        <ul>
          {sectionB.map((row) => (
            <li key={row.id}>{row.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ContentView