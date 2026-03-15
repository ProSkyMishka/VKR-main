import React from 'react'

interface ChildViewProps {
  count: number;
  onCountChange?: (value: number) => void;
}

const ChildView: React.FC<ChildViewProps> = ({ count, onCountChange }) => {
  const handleClick = () => {
    if (onCountChange) {
      onCountChange(count + 1)
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button type="button" onClick={handleClick} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
        Child +1
      </button>
    </div>
  )
}

export default ChildView