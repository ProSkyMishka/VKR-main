import React, { useEffect, useState } from 'react';
import AnswerButton from './AnswerButton';

interface ContentViewProps {
  difficulty: number;
  optionCount: number;
  victoryScore: number;
}

const ContentView: React.FC<ContentViewProps> = ({ difficulty, optionCount, victoryScore }) => {
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
  const optionsInRow = optionCount % 3 === 0 ? 3 : 2;
  const spacingBetweenOptions = optionCount % 3 === 0 ? -10.0 : 25.0;

  const rows = Array.from({ length: Math.ceil(choiceArray.length / optionsInRow) }, (_, index) => {
    const endIndex = Math.min(index * optionsInRow + optionsInRow, choiceArray.length);
    return choiceArray.slice(index * optionsInRow, endIndex);
  });

  const answerIsCorrect = (answer: number) => {
    if (answer === correctAnswer) {
      setScore((prev) => {
        const next = prev + 1;
        if (next >= victoryScore) setTimeout(() => alert('You win!'), 0);
        return next;
      });
    } else {
      setScore((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  const generateAnswers = () => {
    const newOperatorIndex = Math.floor(Math.random() * operators.length);
    setOperatorIndex(newOperatorIndex);
    let newCorrectAnswer: number = 0;
    switch (operators[newOperatorIndex]) {
      case "+":
        newCorrectAnswer = addition();
        break;
      case "-":
        newCorrectAnswer = subtraction();
        break;
      case "*":
        newCorrectAnswer = multiplication();
        break;
      case "/":
        newCorrectAnswer = division();
        break;
      case "√":
        newCorrectAnswer = squareRoot();
        break;
      default:
        break;
    }
    setCorrectAnswer(newCorrectAnswer);

    const answerList: number[] = [];
    while (answerList.length < optionCount - 1) {
      const randomAnswer = Math.floor(Math.random() * (difficulty + 1));
      if (!answerList.includes(randomAnswer) && randomAnswer !== newCorrectAnswer) {
        answerList.push(randomAnswer);
      }
    }
    answerList.push(newCorrectAnswer);
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
    const root = Math.floor(Math.random() * (Math.sqrt(difficulty) + 1));
    const num1 = root * root;
    setFirstNumber(num1);
    setSecondNumber(0);
    return root;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{title}</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex', gap: spacingBetweenOptions }}>
              {row.map((number) => (
                <AnswerButton key={number} number={number} onClick={() => { answerIsCorrect(number); generateAnswers(); }} />
              ))}
            </div>
          ))}
        </div>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Score: {score}</span>
      </div>
    </div>
  );
};

export default ContentView;