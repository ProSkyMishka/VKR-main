import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [items, setItems] = useState<string[]>([])

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView