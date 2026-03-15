import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const options = ["One", "Two", "Three"]
  const [selected, setSelected] = useState<string>('')

  return (
    <div>
      <ul>
        {options.map((opt) => (
          <li key={opt}>
            <button onClick={() => setSelected(opt)}>{opt}</button>
          </li>
        ))}
      </ul>
      <p>Selected: {selected}</p>
    </div>
  )
}

export default ContentView