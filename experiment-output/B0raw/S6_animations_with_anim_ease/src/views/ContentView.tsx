import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [scale, setScale] = useState<number>(1)

  const handleAnimate = () => {
    setScale(scale === 1 ? 1.5 : 1)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className={`text-4xl font-bold transform transition-transform duration-300 ease-in-out`} style={{ transform: `scale(${scale})` }}>
        Anim
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleAnimate}
      >
        Animate
      </button>
    </div>
  )
}

export default ContentView