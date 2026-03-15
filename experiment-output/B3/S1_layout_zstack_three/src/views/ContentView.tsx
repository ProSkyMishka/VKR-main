import React from 'react';

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#808080', zIndex: 0, opacity: 0.2 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 16, fontWeight: 'normal' }}>Middle</span>
        <div style={{ marginTop: 8 }}>
          <span style={{ fontSize: 12, fontWeight: 'normal' }}>Top</span>
        </div>
      </div>
    </div>
  );
};

export default ContentView;