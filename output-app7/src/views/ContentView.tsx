import React, { useState } from 'react';

const ContentView: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#8B4513', zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span>Hello, SwiftUI!</span>
            <button type="button" onClick={() => setCount(c => c + 1)} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
              Count: {count}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentView;