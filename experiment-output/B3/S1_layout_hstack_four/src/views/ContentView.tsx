import React from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
    </div>
  )
}

export default ContentView