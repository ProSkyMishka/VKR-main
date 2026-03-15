import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const options = ["One", "Two", "Three"];
  const [selected, setSelected] = useState<string>("");

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

export default ContentView