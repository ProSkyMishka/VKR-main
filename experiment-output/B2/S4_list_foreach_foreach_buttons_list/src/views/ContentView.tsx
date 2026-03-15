import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [selected, setSelected] = useState<string>('')
  const labels = ["First", "Second", "Third"]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {labels.map(label => (
          <li key={label}>
            <button onClick={() => setSelected(label)}>{label}</button>
          </li>
        ))}
      </ul>
      <div>Selected: {selected}</div>
    </div>
  )
}