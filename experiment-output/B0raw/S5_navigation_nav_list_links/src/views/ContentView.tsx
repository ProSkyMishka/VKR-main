import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [items] = useState(['X', 'Y', 'Z'])

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <a href={`/detail/${item}`}>Detail {item}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView