import { useState } from 'react'

interface M {
  id: number
  name: string
}

const ContentView = () => {
  const [data, setData] = useState<M[]>([
    { id: 1, name: 'A' },
    { id: 2, name: 'B' }
  ])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {data.map((d) => (
          <li key={d.id}>{d.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView