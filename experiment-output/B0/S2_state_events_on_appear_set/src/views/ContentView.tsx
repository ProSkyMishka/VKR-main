import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [value, setValue] = useState(0)

  return (
    <div>
      <p>{value}</p>
    </div>
  )

  useEffect(() => {
    setValue(42)
  }, [])
}

export default ContentView