import { useState, useEffect } from 'react'

export default function ContentView() {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span>{loading ? 'Loading...' : 'Ready'}</span>
    </div>
  )
}