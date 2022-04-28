import constants from '../constants.js';
import getNameAndGreet from '../cli.js';
import getRandomInt from '../utils/getRandomInt.js';
import checkGame from '../utils/checkGame.js';
import getUserAnswer from '../utils/getUserAnswer.js';
import showQuestion from '../utils/showQuestion.js';
import gcd from '../utils/gcd.js';

const game = (name) => {
  const number1 = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);
  const number2 = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);
  const question = `${number1} ${number2}`;
  const answer = String(gcd(number1, number2));
  showQuestion(question);
  const userAnswer = getUserAnswer();

  checkGame({
    userAnswer,
    answer,
    gameFn: game,
    name,
  });
};

const gcdGame = () => {
  const name = getNameAndGreet();
  console.log('Find the greatest common divisor of given numbers.');
  game(name);
};

export default gcdGame;
