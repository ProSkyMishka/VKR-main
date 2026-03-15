import { useState } from 'react'

interface R {
  id: string
  title: string
}

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [rows, setRows] = useState<R[]>([
    { id: '1', title: '1' },
    { id: '2', title: '2' }
  ])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <div style={{ marginBottom: 16 }}>Main</div>
        {rows.map(r => (
          <div key={r.id} style={{ marginBottom: 8 }}>{r.title}</div>
        ))}
      </div>
    </div>
  )
}