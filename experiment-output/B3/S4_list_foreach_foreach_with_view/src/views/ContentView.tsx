import React, { useState } from 'react'
import RowView from './RowView'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const items = ['One', 'Two', 'Three']

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {items.map((item) => (
          <RowView key={item} title={item} />
        ))}
      </ul>
    </div>
  )
}

export default ContentView