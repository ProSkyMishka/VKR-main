import React, { useState } from 'react'

function ContentView() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)

  return (
    <div>
      <p>a:{a} b:{b} c:{c}</p>
      <div>
        <button onClick={() => setA(a + 1)}>A+</button>
        <button onClick={() => setB(b + 1)}>B+</button>
        <button onClick={() => setC(c + 1)}>C+</button>
      </div>
    </div>
  )
}

export default ContentView