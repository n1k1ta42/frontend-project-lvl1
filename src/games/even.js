import constants from '../constants.js';
import runGame from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const isEven = (n) => n % 2 === 0;

const gameConditions = () => {
  const number = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);

  return {
    question: String(number),
    answer: isEven(number) ? 'yes' : 'no',
  };
};

const start = () => {
  runGame("Answer 'yes' if the number is even, otherwise answer 'no'.", gameConditions);
};

export default start;
