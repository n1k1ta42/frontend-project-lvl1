import constants from '../constants.js';
import getNameAndGreet from '../cli.js';
import getRandomInt from '../utils/getRandomInt.js';
import isEven from '../utils/isEven.js';
import checkGame from '../utils/checkGame.js';
import getUserAnswer from '../utils/getUserAnswer.js';
import showQuestion from '../utils/showQuestion.js';

const game = (name) => {
  const number = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);
  const answer = isEven(number) ? 'yes' : 'no';
  showQuestion(number);
  const userAnswer = getUserAnswer();

  checkGame({
    userAnswer,
    answer,
    gameFn: game,
    name,
  });
};

const even = () => {
  const name = getNameAndGreet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  game(name);
};

export default even;
