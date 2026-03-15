import React from 'react'

interface PageBProps {
  // no props
}

const PageB: React.FC<PageBProps> = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span>Page B</span>
    </div>
  )
}

export default PageB