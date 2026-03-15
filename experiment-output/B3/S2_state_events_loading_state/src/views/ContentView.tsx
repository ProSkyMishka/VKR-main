import React, { useState, useEffect } from 'react'

const ContentView: React.FC = () => {
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

export default ContentView