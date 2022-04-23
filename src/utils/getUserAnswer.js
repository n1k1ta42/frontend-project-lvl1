import readlineSync from 'readline-sync';

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export default getUserAnswer;
