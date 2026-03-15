import React from 'react';

const ContentView: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1 }} />
      <div style={{ padding: '24px', backgroundColor: 'rgba(255, 165, 0, 0.3)', borderRadius: '8px' }}>
        Center
      </div>
      <div style={{ flex: 1 }} />
    </div>
  );
};

export default ContentView;