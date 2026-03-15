import React from 'react'

interface InnerViewProps {
  x: number;
  onXChange?: (value: number) => void;
}

const InnerView: React.FC<InnerViewProps> = ({ x, onXChange }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button type="button" onClick={() => onXChange?.(x + 1)} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
        Inner
      </button>
    </div>
  )
}

export default InnerView