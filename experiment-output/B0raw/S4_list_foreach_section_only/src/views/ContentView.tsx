import React, { useState } from 'react'

interface R {
  id: string
  title: string
}

const ContentView: React.FC = () => {
  const [rows, setRows] = useState<R[]>([
    { id: '1', title: '1' },
    { id: '2', title: '2' },
  ])

  return (
    <div>
      <h1>Main</h1>
      <ul>
        {rows.map((r) => (
          <li key={r.id}>{r.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView