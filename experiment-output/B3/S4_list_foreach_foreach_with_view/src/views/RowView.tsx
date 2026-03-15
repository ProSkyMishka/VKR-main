import React from 'react'

interface RowViewProps {
  title: string
}

const RowView: React.FC<RowViewProps> = ({ title }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span>{title}</span>
    </div>
  )
}

export default RowView