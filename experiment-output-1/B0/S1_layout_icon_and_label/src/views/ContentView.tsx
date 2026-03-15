import React from 'react';

const ContentView: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
      <img src="https://img.icons8.com/ios-filled/50/000000/star.png" alt="star" style={{ color: 'yellow', marginRight: '12px' }} />
      <span>Favorite</span>
    </div>
  );
};

export default ContentView;