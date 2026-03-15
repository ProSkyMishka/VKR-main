import React from 'react'

const ContentView: React.FC = () => {
  return (
    <div style={{ padding: '12px' }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <div style={{ color: 'yellow' }}>
          <i className="fas fa-star"></i>
        </div>
        <div>Favorite</div>
      </div>
    </div>
  )
}

export default ContentView