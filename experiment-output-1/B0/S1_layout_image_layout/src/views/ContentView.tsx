import React from 'react';

const ContentView: React.FC = () => {
  return (
    <div style={{ padding: '16px' }}>
      <img
        src="/logo.png"
        alt="Logo"
        style={{ width: '120px', height: '120px', objectFit: 'contain' }}
      />
      <p style={{ fontSize: '12px' }}>Caption</p>
    </div>
  );
};

export default ContentView;