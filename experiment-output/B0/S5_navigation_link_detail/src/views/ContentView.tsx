import React from 'react'
import DetailView from './DetailView'

const ContentView: React.FC = () => {
  return (
    <div>
      <nav>
        <a href="#">Open</a>
      </nav>
      <DetailView title="Open" />
    </div>
  )
}

export default ContentView