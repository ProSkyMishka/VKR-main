import { useState } from 'react';

function ContentView() {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span>Hello, SwiftUI!</span>
        <button 
          type="button" 
          onClick={() => setCount(c => c + 1)} 
          style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}
        >
          Count: {count}
        </button>
      </div>
    </div>
  );
}

export default ContentView;