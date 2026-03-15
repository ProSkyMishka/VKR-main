import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [offset, setOffset] = useState<number>(0)

  const handleMoveClick = () => {
    setOffset(offset === 0 ? 50 : 0)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-4xl font-bold mb-4">Slide</div>
      <div className="text-4xl font-bold" style={{ transform: `translateX(${offset}px)` }}>
        Slide
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleMoveClick}
      >
        Move
      </button>
    </div>
  )
}

export default ContentView