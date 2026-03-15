import React, { useState } from 'react';
import ContentView from './ContentView';

interface SettingViewProps {
  // no props
}

const SettingView: React.FC<SettingViewProps> = () => {
  const [difficulty, setDifficulty] = useState<number>(20);
  const [optionsCount, setOptionsCount] = useState<number>(4);
  const [victoryScore, setVictoryScore] = useState<number>(10);
  const [currentScreen, setCurrentScreen] = useState<'settings' | 'game'>('settings');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {currentScreen === 'settings' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <span style={{ fontSize: 35, fontWeight: 'bold' }}>Settings</span>
          <span style={{ fontSize: 25 }}>Options count: {optionsCount}</span>
          <span style={{ fontSize: 25 }}>Victory score: {victoryScore}</span>
          <button onClick={() => setCurrentScreen('game')} style={{ padding: 10, backgroundColor: 'blue', color: 'white' }}>
            Start the game
          </button>
        </div>
      ) : (
        <ContentView difficulty={difficulty} optionCount={optionsCount} victoryScore={victoryScore} />
      )}
    </div>
  );
};

export default SettingView;