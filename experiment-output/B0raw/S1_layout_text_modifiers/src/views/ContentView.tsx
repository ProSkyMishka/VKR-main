import React from 'react'

function ContentView() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <h1 className="text-4xl font-bold">Title</h1>
      <h2 className="text-gray-500 text-lg">Subtitle</h2>
      <div className="w-50 h-20 bg-orange-300 rounded-md"></div>
    </div>
  )
}

export default ContentView