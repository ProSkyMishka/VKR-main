import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [count] = useState(7)

  return (
    <div>
      <ul>
        {Array.from({ length: count }, (_, i) => (
          <li key={i}>Row {i + 1}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView