import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [words, setWords] = useState<string[]>(["Apple", "Banana", "Cherry", "Date"])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {words.map((w, i) => (
          <li key={i}><span>{w}</span></li>
        ))}
      </ul>
    </div>
  )
}