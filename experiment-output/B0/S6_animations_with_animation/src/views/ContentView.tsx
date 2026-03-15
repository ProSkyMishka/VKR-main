import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [offset, setOffset] = useState<number>(0)

  const handleMoveButton = () => {
    setOffset(offset === 0 ? 50 : 0)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Slide</h1>
      <div className="transform transition-transform duration-300 ease-in-out" style={{ transform: `translateX(${offset}px)` }}>
        <p>Slide</p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleMoveButton}>
        Move
      </button>
    </div>
  )
}

export default ContentView