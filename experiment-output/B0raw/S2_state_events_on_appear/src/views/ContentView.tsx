import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div>
      <p>{loaded ? 'Loaded' : 'Loading...'}</p>
      <button onClick={() => setLoaded(true)}>Load</button>
    </div>
  )
}

export default ContentView