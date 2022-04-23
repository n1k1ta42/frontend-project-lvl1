import constants from '../constants.js';
import getNameAndGreet from '../cli.js';
import getRandomInt from '../utils/getRandomInt.js';
import checkGame from '../utils/checkGame.js';
import getUserAnswer from '../utils/getUserAnswer.js';
import showQuestion from '../utils/showQuestion.js';

const buildArythmProgression = (first, step, length) => {
  const progression = Array.from({ length }, (_, index) => first + step * index);
  return progression;
};

function game(name) {
  const firstElem = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);
  const step = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);
  const replacementIndex = getRandomInt(0, constants.PROGRESSION_LENGHT);
  const progression = buildArythmProgression(firstElem, step, constants.PROGRESSION_LENGHT);
  const answer = String(progression[replacementIndex]);
  progression[replacementIndex] = '..';
  const question = progression.join(' ');
  showQuestion(question);
  const userAnswer = getUserAnswer();

  checkGame({
    userAnswer,
    answer,
    gameFn: game,
    name,
  });
}

export default function progressionGame() {
  const name = getNameAndGreet();
  console.log('What number is missing in the progression?');
  game(name);
}
