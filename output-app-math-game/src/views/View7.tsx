import React, { useState, useEffect } from 'react';
import AnswerButton from './AnswerButton';

interface ContentViewProps {
  difficulty: number;
  optionsCount: number;
  victoryScore: number;
}

const ContentView: React.FC<ContentViewProps> = ({ difficulty, optionsCount, victoryScore }) => {
  const [choiceArray, setChoiceArray] = useState<number[]>([]);
  const [operators] = useState<string[]>(["+", "-", "*", "/", "√"]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [operatorIndex, setOperatorIndex] = useState<number>(0);

  useEffect(() => {
    generateAnswers();
  }, []);

  const title = operatorIndex !== 4 ? `${firstNumber} ${operators[operatorIndex]} ${secondNumber}` : `${operators[operatorIndex]}${firstNumber}`;
  const optionsInRow = optionsCount % 3 === 0 ? 3 : 2;
  const spacingBetweenOptions = optionsCount % 3 === 0 ? -10.0 : 25.0;

  const rows = Array.from({ length: Math.ceil(choiceArray.length / optionsInRow) }, (_, index) => {
    const start = index * optionsInRow;
    return choiceArray.slice(start, start + optionsInRow);
  });

  const answerIsCorrect = (answer: number) => {
    if (answer === correctAnswer) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => (prev > 0 ? prev - 1 : 0));
    }

    if (score + 1 === victoryScore) {
      alert('You win!');
    }
  };

  const generateAnswers = () => {
    const newOperatorIndex = Math.floor(Math.random() * operators.length);
    setOperatorIndex(newOperatorIndex);
    switch (operators[newOperatorIndex]) {
      case "+":
        setCorrectAnswer(addition());
        break;
      case "-":
        setCorrectAnswer(subtraction());
        break;
      case "*":
        setCorrectAnswer(multiplication());
        break;
      case "/":
        setCorrectAnswer(division());
        break;
      case "√":
        setCorrectAnswer(squareRoot());
        break;
    }

    const answerList: number[] = [];
    while (answerList.length < optionsCount - 1) {
      const randomAnswer = Math.floor(Math.random() * (difficulty + 1));
      if (!answerList.includes(randomAnswer) && randomAnswer !== correctAnswer) {
        answerList.push(randomAnswer);
      }
    }
    answerList.push(correctAnswer);
    setChoiceArray(answerList.sort(() => Math.random() - 0.5));
  };

  const addition = () => {
    const num1 = Math.floor(Math.random() * (difficulty / 2 + 1));
    const num2 = Math.floor(Math.random() * (difficulty / 2 + 1));
    setFirstNumber(num1);
    setSecondNumber(num2);
    return num1 + num2;
  };

  const subtraction = () => {
    const num1 = Math.floor(Math.random() * (difficulty + 1));
    const num2 = Math.floor(Math.random() * (num1 + 1));
    setFirstNumber(num1);
    setSecondNumber(num2);
    return num1 - num2;
  };

  const multiplication = () => {
    const num1 = Math.floor(Math.random() * (difficulty / 2) + 1);
    const maxSecond = Math.floor(difficulty / num1);
    const num2 = Math.floor(Math.random() * (maxSecond) + 1);
    setFirstNumber(num1);
    setSecondNumber(num2);
    return num1 * num2;
  };

  const division = () => {
    const num2 = Math.floor(Math.random() * (difficulty / 10) + 1);
    const quotient = Math.floor(Math.random() * 10) + 1;
    const num1 = num2 * quotient;
    setFirstNumber(num1);
    setSecondNumber(num2);
    return quotient;
  };

  const squareRoot = () => {
    const root = Math.floor(Math.random() * Math.sqrt(difficulty) + 1);
    const num1 = root * root;
    setFirstNumber(num1);
    setSecondNumber(0);
    return root;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <h1>{title}</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', gap: spacingBetweenOptions }}>
            {row.map((number) => (
              <AnswerButton key={number} number={number} onClick={() => answerIsCorrect(number)} />
            ))}
          </div>
        ))}
      </div>
      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Score: {score}</span>
    </div>
  );
};

export default ContentView;