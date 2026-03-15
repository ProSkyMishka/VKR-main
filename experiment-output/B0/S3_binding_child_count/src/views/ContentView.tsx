import React, { useState } from 'react'
import ChildView from './ChildView'

const ContentView: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <ChildView count={count} setCount={setCount} />
    </div>
  )
}

export default ContentView