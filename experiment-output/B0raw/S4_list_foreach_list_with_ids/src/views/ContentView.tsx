import React, { useState } from 'react'

interface M {
  id: number
  name: string
}

const ContentView: React.FC = () => {
  const [data, setData] = useState<M[]>([
    { id: 1, name: 'A' },
    { id: 2, name: 'B' }
  ])

  return (
    <div>
      <ul>
        {data.map((d) => (
          <li key={d.id}>{d.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView