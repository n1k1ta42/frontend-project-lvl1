import getNameAndGreet from '../cli.js';
import getRandomInt from '../utils/getRandomInt.js';
import checkGame from '../utils/checkGame.js';
import getUserAnswer from '../utils/getUserAnswer.js';
import showQuestion from '../utils/showQuestion.js';
import isPrime from '../utils/isPrime.js';

function game(name) {
  const number = getRandomInt(1, 100);
  const answer = isPrime(Number(number)) ? 'yes' : 'no';
  const question = String(number);
  showQuestion(question);
  const userAnswer = getUserAnswer();

  checkGame({
    userAnswer,
    answer,
    gameFn: game,
    name,
  });
}

export default function primeGame() {
  const name = getNameAndGreet();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  game(name);
}
