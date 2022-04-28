import constants from '../constants.js';
import getRandomInt from '../utils/getRandomInt.js';
import getRandomSign from '../utils/getRandomSign.js';
import runGame from '../index.js';

const mapSignToOperator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const gameConditions = () => {
  const firstNumber = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);
  const secondNumber = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);
  const operatorSign = getRandomSign(Object.keys(mapSignToOperator));
  const operator = mapSignToOperator[operatorSign];

  return {
    question: `${firstNumber} ${operatorSign} ${secondNumber}`,
    answer: String(operator(firstNumber, secondNumber)),
  };
};

const start = () => {
  runGame('What is the result of the expression?', gameConditions);
};

export default start;
