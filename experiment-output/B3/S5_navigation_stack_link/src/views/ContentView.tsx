import React from 'react';

interface ContentViewProps {
  onPress: () => void;
}

const ContentView: React.FC<ContentViewProps> = ({ onPress }) => {
  return (
    <div>
      <button onClick={onPress}>
        Start the game
      </button>
    </div>
  );
};

export default ContentView;