import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [value, setValue] = useState(0)

  React.useEffect(() => {
    setValue(42)
  }, [])

  return (
    <div>
      <p>{value}</p>
    </div>
  )
}

export default ContentView