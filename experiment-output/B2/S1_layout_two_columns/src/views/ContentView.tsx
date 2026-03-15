import React from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 32, alignItems: 'center', padding: 20 }}>
        <span>Col1-A</span>
        <span>Col1-B</span>
        <span>Col2-A</span>
        <span>Col2-B</span>
      </div>
    </div>
  )
}

export default ContentView