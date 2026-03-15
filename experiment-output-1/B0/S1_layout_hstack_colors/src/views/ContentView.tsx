import React from 'react';

const ContentView: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '12px', fontSize: '2rem' }}>
      <span style={{ color: 'red' }}>R</span>
      <span style={{ color: 'green' }}>G</span>
      <span style={{ color: 'blue' }}>B</span>
    </div>
  );
};

export default ContentView;