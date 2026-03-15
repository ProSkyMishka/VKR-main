import React from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  return (
    <div>
      <ul>
        <li>Alpha</li>
        <li>Beta</li>
        <li>Gamma</li>
      </ul>
    </div>
  )
}

export default ContentView