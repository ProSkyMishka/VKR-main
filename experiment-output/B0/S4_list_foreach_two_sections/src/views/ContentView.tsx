import React, { useState } from 'react'

const ContentView: React.FC = () => {
  return (
    <div>
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