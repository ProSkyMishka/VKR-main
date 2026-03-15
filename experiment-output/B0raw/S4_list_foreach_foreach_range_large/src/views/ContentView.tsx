import React, { useState } from 'react'

function ContentView() {
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