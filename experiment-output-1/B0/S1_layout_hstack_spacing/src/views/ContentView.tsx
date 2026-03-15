import React from 'react';

const ContentView: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', padding: '20px' }}>
      <div>Left</div>
      <div>Center</div>
      <div>Right</div>
    </div>
  );
};

export default ContentView;