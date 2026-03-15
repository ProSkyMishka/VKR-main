import React, { useState, useEffect } from 'react'

const ContentView: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div>
      <p>{loading ? 'Loading...' : 'Ready'}</p>
    </div>
  )
}

export default ContentView