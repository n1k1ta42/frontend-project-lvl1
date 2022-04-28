import constants from '../constants.js';
import runGame from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const gameConditions = () => {
  const number1 = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);
  const number2 = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);

  return {
    question: `${number1} ${number2}`,
    answer: String(gcd(number1, number2)),
  };
};

const start = () => {
  runGame('Find the greatest common divisor of given numbers.', gameConditions);
};

export default start;
