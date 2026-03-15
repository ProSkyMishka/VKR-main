import { useState, useEffect } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span>{loaded ? 'Loaded' : 'Loading...'}</span>
    </div>
  )
}