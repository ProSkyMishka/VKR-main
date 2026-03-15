import React from 'react';

interface AnswerButtonProps {
  number: number;
  onClick: () => void;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({ number, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: 110,
        height: 110,
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'blue',
        borderRadius: '50%',
        padding: 0,
      }}
    >
      {number}
    </button>
  );
};

export default AnswerButton;
