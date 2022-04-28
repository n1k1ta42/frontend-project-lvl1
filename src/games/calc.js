import constants from '../constants.js';
import getNameAndGreet from '../cli.js';
import getRandomInt from '../utils/getRandomInt.js';
import getRandomSign from '../utils/getRandomSign.js';
import checkGame from '../utils/checkGame.js';
import getUserAnswer from '../utils/getUserAnswer.js';
import showQuestion from '../utils/showQuestion.js';

const game = (name) => {
  const firstNumber = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);
  const secondNumber = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);
  const { operator, action } = getRandomSign(constants.SIGNS);
  const answer = String(action(firstNumber, secondNumber));

  const expression = `${firstNumber} ${operator} ${secondNumber}`;

  showQuestion(expression);

  const userAnswer = getUserAnswer();

  checkGame({
    userAnswer,
    answer,
    gameFn: game,
    name,
  });
};

const calc = () => {
  const name = getNameAndGreet();
  console.log('What is the result of the expression?');
  game(name);
};

export default calc;
