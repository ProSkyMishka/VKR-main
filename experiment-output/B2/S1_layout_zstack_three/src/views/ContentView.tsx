import React from 'react';

const ContentView: React.FC = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#808080', zIndex: 0, opacity: 0.2 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 16, fontWeight: 'bold' }}>Middle</span>
        <div style={{ marginTop: 8 }}>
          <span style={{ fontSize: 12 }}>Top</span>
        </div>
      </div>
    </div>
  );
};

export default ContentView;