import React, { useState } from 'react'

function ContentView() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Content View</h1>
      <ul>
        <li>
          <h2>A</h2>
          <ul>
            <li>A1</li>
            <li>A2</li>
          </ul>
        </li>
        <li>
          <h2>B</h2>
          <ul>
            <li>B1</li>
            <li>B2</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default ContentView