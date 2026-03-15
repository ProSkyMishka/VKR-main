import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const labels = ["First", "Second", "Third"]
  const [selected, setSelected] = useState<string>('')

  return (
    <div>
      <ul>
        {labels.map((label) => (
          <li key={label}>
            <button onClick={() => setSelected(label)}>{label}</button>
          </li>
        ))}
      </ul>
      <p>Selected: {selected}</p>
    </div>
  )
}

export default ContentView