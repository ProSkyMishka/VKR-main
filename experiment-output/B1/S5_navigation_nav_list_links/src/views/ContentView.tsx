import React, { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const items = ['X', 'Y', 'Z']

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <ul>
          {items.map((item) => (
            <a href="#" key={item}>
              <span>Detail {item}</span>
            </a>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ContentView