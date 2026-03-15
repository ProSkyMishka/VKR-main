import React, { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <div>
          <h3>Header</h3>
          <ul>
            <li>Row 1</li>
            <li>Row 2</li>
          </ul>
        </div>
        <div>Footer</div>
      </div>
    </div>
  )
}

export default ContentView