import React from 'react'

interface DetailViewProps {
  title: string
}

const DetailView: React.FC<DetailViewProps> = ({ title }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span>Detail: {title}</span>
    </div>
  )
}

export default DetailView