import React from 'react'

interface DetailViewProps {
  title: string
}

const DetailView: React.FC<DetailViewProps> = ({ title }) => {
  return <div>Detail: {title}</div>
}

export default DetailView