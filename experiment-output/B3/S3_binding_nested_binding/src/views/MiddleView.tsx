import React from 'react'
import InnerView from './InnerView'

interface MiddleViewProps {
  x: number
  onXChange?: (value: number) => void
}

const MiddleView: React.FC<MiddleViewProps> = ({ x, onXChange }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <InnerView x={x} onXChange={onXChange} />
    </div>
  )
}

export default MiddleView