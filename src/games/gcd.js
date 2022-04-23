import constants from '../constants.js';
import getNameAndGreet from '../cli.js';
import getRandomInt from '../utils/getRandomInt.js';
import checkGame from '../utils/checkGame.js';
import getUserAnswer from '../utils/getUserAnswer.js';
import showQuestion from '../utils/showQuestion.js';

const handleGcd = (a, b) => (b === 0 ? a : handleGcd(b, a % b));

function game(name) {
  const number1 = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);
  const number2 = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);
  const question = `${number1} ${number2}`;
  const answer = String(handleGcd(number1, number2));
  showQuestion(question);
  const userAnswer = getUserAnswer();

  checkGame({
    userAnswer,
    answer,
    gameFn: game,
    name,
  });
}

export default function gcd() {
  const name = getNameAndGreet();
  console.log('Find the greatest common divisor of given numbers.');
  game(name);
}
