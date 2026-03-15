import React from 'react'
import { useState } from 'react'
import DetailView from './DetailView'

function ContentView() {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <div>
      <nav>
        <button onClick={() => setShowDetail(true)}>Go to Detail</button>
      </nav>
      {showDetail && <DetailView />}
    </div>
  )
}

export default ContentView