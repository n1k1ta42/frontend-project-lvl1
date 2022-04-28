import getRandomInt from '../utils/getRandomInt.js';
import runGame from '../index.js';
import constants from '../constants.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const gameConditions = () => {
  const number = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);

  return {
    question: String(number),
    answer: isPrime(Number(number)) ? 'yes' : 'no',
  };
};

const start = () => {
  runGame("Answer 'yes' if given number is prime. Otherwise answer 'no'.", gameConditions);
};

export default start;
