import React, { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const groups = [["a", "b"], ["c", "d"]]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {groups.map((group, i) => (
          <li key={i}>
            {group.map((item, j) => (
              <span key={j}>{item}</span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView