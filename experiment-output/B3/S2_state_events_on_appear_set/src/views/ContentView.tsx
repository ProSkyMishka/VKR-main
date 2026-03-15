import React, { useState, useEffect } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [value, setValue] = useState<number>(0)

  useEffect(() => {
    setValue(42)
  }, [])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span>{value}</span>
    </div>
  )
}

export default ContentView