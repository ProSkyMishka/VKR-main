import React from 'react';

const ContentView: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Title</h1>
      <p style={{ fontSize: '0.875rem', color: 'gray' }}>Caption</p>
    </div>
  );
};

export default ContentView;