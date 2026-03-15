import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [words] = useState<string[]>(['Apple', 'Banana', 'Cherry', 'Date'])

  return (
    <div>
      <ul>
        {words.map((w, i) => (
          <li key={i}>{w}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView