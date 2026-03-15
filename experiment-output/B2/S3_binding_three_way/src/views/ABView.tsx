import React from 'react'

interface ABViewProps {
  a: number;
  onAChange?: (value: number) => void;
  b: number;
  onBChange?: (value: number) => void;
}

const ABView = ({ a, onAChange, b, onBChange }: ABViewProps) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
        <button type="button" onClick={() => onAChange?.(a + 1)} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          A
        </button>
        <button type="button" onClick={() => onBChange?.(b + 1)} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          B
        </button>
      </div>
    </div>
  )
}

export default ABView