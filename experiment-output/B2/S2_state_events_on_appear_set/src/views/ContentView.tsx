import { useState, useEffect } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
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