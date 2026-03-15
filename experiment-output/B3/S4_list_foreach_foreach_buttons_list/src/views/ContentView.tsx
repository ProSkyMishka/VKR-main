import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const labels = ["First", "Second", "Third"];
  const [selected, setSelected] = useState<string>("");

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {labels.map((label) => (
          <li key={label}>
            <button onClick={() => setSelected(label)}>{label}</button>
          </li>
        ))}
      </ul>
      <div>Selected: {selected}</div>
    </div>
  )
}

export default ContentView