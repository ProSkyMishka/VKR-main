import React from 'react'

interface RowViewProps {
  title: string
}

const RowView: React.FC<RowViewProps> = ({ title }) => {
  return <div>{title}</div>
}

export default RowView