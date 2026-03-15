import React from 'react'

interface PageAProps {
  // no props
}

const PageA: React.FC<PageAProps> = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span>Page A</span>
    </div>
  )
}

export default PageA