import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState('')
  const [flag, setFlag] = useState(false)

  const handleUpdate = () => {
    setA(a + 1)
    setB(`${a}`)
    setFlag(!flag)
  }

  return (
    <div>
      <p>a: {a}</p>
      <p>b: {b}</p>
      <p>{flag ? 'Yes' : 'No'}</p>
      <button onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default ContentView