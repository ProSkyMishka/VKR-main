import React from 'react'
import RowView from './RowView'

const ContentView: React.FC = () => {
  const items = ['One', 'Two', 'Three']

  return (
    <div>
      {items.map((item, index) => (
        <RowView key={index} title={item} />
      ))}
    </div>
  )
}

export default ContentView