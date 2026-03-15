import React, { useState } from 'react'

const ContentView: React.FC = () => {
  return (
    <div>
      <ul>
        {Array.from({ length: 20 }, (_, i) => (
          <li key={i}>Item {i}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView