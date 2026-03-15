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
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ padding: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontWeight: 'bold' }}>Main</div>
          {rows.map((r) => (
            <span key={r.id}>{r.title}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContentView