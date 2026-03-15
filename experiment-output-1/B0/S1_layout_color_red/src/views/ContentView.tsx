import React from 'react';

const ContentView: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'red', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span style={{ color: 'white', fontSize: '24px' }}>Red</span>
    </div>
  );
};

export default ContentView;