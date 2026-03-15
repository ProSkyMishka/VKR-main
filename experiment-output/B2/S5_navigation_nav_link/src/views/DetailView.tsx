import React from 'react'

interface DetailViewProps {
  // no props
}

const DetailView: React.FC<DetailViewProps> = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span>Detail</span>
    </div>
  )
}

export default DetailView