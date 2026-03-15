import React from 'react'
import ContentView from './views/ContentView'

const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ContentView />
    </div>
  )
}

export default App