import React, { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [items, setItems] = useState<string[]>([])

  React.useEffect(() => {
    const newItems = Array.from({ length: 5 }, (_, i) => `Item ${i}`)
    setItems(newItems)
  }, [])

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