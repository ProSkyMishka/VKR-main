import React from 'react'

const ContentView: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i}>Item {i}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView