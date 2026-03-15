import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const options = ["One", "Two", "Three"]
  const [selected, setSelected] = useState<string>("")

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {options.map((opt) => (
          <li key={opt}>
            <button onClick={() => setSelected(opt)}>{opt}</button>
          </li>
        ))}
      </ul>
      <div>Selected: {selected}</div>
    </div>
  )
}