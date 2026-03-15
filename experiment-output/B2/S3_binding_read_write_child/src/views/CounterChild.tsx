import React from 'react'

interface CounterChildProps {
  count: number;
  onCountChange?: (value: number) => void;
}

const CounterChild: React.FC<CounterChildProps> = ({ count, onCountChange }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
      <span>{count}</span>
      <button type="button" onClick={() => onCountChange?.(count + 1)} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
        +
      </button>
    </div>
  )
}

export default CounterChild